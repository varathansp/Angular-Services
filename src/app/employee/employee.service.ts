import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
//import {map} from 'rxjs/operators'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get('http://localhost:52526/api/employee')
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
        // return [
        //     { code: 'emp101', name: 'Tomy', gender: 'Male', annualSalary: 5500, dateOfBirth: '5/16/1988' },
        //     { code: 'emp102', name: 'Alexx', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
        //     { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
        //     { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '04/18/1980' },
        //     { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '11/12/1982' }
        // ];
    }
    getEmployeeByCode(empode:string): Observable<IEmployee> {
        return this._http.get('http://localhost:52526/api/employee/'+empode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
    

}