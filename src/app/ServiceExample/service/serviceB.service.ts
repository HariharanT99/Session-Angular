import { Injectable, OnChanges } from "@angular/core";


@Injectable({
    providedIn: 'any'
})

export class ServiceBService implements OnChanges{
    constructor() {
        
    }

    nameB = "This is service B";

    SetNameB(str: string){
        this.nameB = str;
    }

    ngOnChanges(){

    }
}