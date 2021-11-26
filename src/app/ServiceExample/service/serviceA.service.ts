import { Injectable } from "@angular/core";
import { ServiceBService } from "./serviceB.service";


@Injectable({
    providedIn: 'platform'
})

export class ServiceAService {
    constructor(public servB: ServiceBService) {

    }

    nameA = "This is Service A";
}