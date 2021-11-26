import { Component } from "@angular/core";
import { ServiceAService } from "../service/serviceA.service";
import { ServiceBService } from "../service/serviceB.service";


@Component({
    selector: 'app-service-consume',
    templateUrl: './service-consume.component.html'
})

export class ServiceConsumeComponent {
    constructor(private servB: ServiceBService) {

        // this.nameA = servB.nameA;

        this.nameB = servB.nameB
    }

    nameA: string = "";

    nameB: string = "";

    OnSet(str: string){
        this.servB.SetNameB(str);
    }

    OnGet(){
        console.log("FocusA")
        this.value = this.servB.nameB;
        console.log(this.servB.nameB);
    }

    value = "";
}