import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from "@angular/core";
import { ServiceBService } from "src/app/ServiceExample/service/serviceB.service";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})

export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked{

    constructor() {
        console.log("Child---------Constructor") 
    };

    ngOnInit(): void{
        console.log("Child---------OnInit")
        console.log('onInit - ' + this.parentContent);

        // this.intervel = setInterval(() => {
        //     this.count = this.count + 1;
        //     console.log(this.count);
        // },1000)
    }

    count = 0;
    intervel: any;

    @Input() Name = '';

    @ContentChild('parentContent') parentContent: any;


    ngOnDestroy() { 
        // clearInterval(this.intervel);
        console.log('Child ----------- OnDestroy - component is destroyed');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log("Child --------- OnChanges");
        console.log(changes);
        console.log('onChanges - ' + this.parentContent);
    }

    ngDoCheck() {
        console.log("Child ------- DoCheck");
        console.log('doCheck - ' + this.parentContent);
    }

    ngAfterContentInit() {
        console.log("Child ------ AfterContentInit");
        console.log('AfterContentInit - ' + this.parentContent);
    }

    ngAfterContentChecked() {
        console.log("Child ------- AfterContentChecked");
    }
}