import { Component, OnInit} from '@angular/core'
import { IEmployee} from './employee'
import { EmployeeService} from './employee.service'
import { ActivatedRoute, Router } from '@angular/router'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/scan'
import { scan } from 'rxjs-compat/operator/scan';
import {ISubscription} from 'rxjs/Subscription'

@Component({
    templateUrl:'employee.component.html',
    providers:[EmployeeService],
    styleUrls: ['./employeeList.component.css']
})
export class EmployeeComponent implements OnInit{
employee:IEmployee;
statusMessage:string="Loading";
subscription :ISubscription;
constructor(private _employeeService:EmployeeService,
    private _activatedRoute:ActivatedRoute,private _route:Router){

}
onBackButtonClick():void{
    this._route.navigate(['employees']);
}
onCancelButtonClick():void{
    this.statusMessage="Request Cancelled";
this.subscription.unsubscribe();
}
ngOnInit(){
   let empCode= this._activatedRoute.snapshot.params['code'];

    this.subscription= this._employeeService.getEmployeeByCode(empCode)
   .retryWhen((err)=>{
       return err.scan((retryCount)=>{
           retryCount+=1;
           if(retryCount<6){
               this.statusMessage="Retrying... Attempt #"+retryCount;
               return retryCount;
           }else{throw(err)}
       },0).delay(1000)
   })
   .subscribe(
       (employeeData)=>{
           if(employeeData==null){this.statusMessage="Employee doesn't exixt"}
           else{this.employee=employeeData}
       },(error)=>{
           console.error(error);
           this.statusMessage="Problem with the server";
       }
   );
}
}