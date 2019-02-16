import { Component,Input,Output,EventEmitter } from '@angular/core'

@Component({
    selector:'employee-count',
    templateUrl:'./employeeCount.component.html',
    styleUrls:['./employeeList.component.css']
})
export class employeeCountComponent{

    selectedRadioButtonValue:string='All';

    @Output()
    countRadioButtonSelectinChanged:EventEmitter<string>=new EventEmitter<string>();

    @Input()
    all:number;
    @Input()
    male:number;
    @Input()
    female:number;

    onRadioButtonSelectionChanged(){
        this.countRadioButtonSelectinChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}