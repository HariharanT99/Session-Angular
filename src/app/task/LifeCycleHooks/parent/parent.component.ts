import { Component, DoCheck, OnChanges, OnInit } from "@angular/core";

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
})

export class ParentComponent implements OnInit, OnChanges, DoCheck{

    constructor() {   
        console.log("Parent---------Constructor")         
    };

    ngOnInit(): void{   
        console.log("Parent---------OnInit")
    }

    isChild = true;

    firstName = "";

    toggleChild(){
        this.isChild = !this.isChild;
    }

    ngOnChanges() {
        console.log("Parent -------- OnChange");
    }

    ngDoCheck() {
        console.log("Parent --------- DoCheck")
    }
}