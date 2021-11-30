import { Component } from "@angular/core";
import { ServiceBService } from "../../service/serviceB.service";


@Component({
    selector: 'app-service-consume2',
    templateUrl: './service-consume2.component.html',
    providers: [ServiceBService]
})

export class ServiceConsume2Component {
    constructor(private servB: ServiceBService) {
        this.nameB = servB.nameB
    }

    nameB = "";

    OnSetNameB(str: string){
        this.servB.SetNameB(str);
    }

    OnGet(){
        console.log("Focus")
        this.value = this.servB.nameB
        console.log(this.servB.nameB)
    }

    value = "";
}