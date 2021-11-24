import { Component } from "@angular/core";


@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss']
})

export class EmailComponent {

    constructor() {
    }
    // Email Validation
    emailvalidation = "true";

    CheckEmailValidation(element: any){
        console.log(element.srcElement.name);
        this.emailvalidation = element.srcElement.name;
    }


    // Phone Number Validation

    phoneValidation = "true";

    CheckPhoneValidation(element: any){
        console.log(element.srcElement.name);
        this.phoneValidation = element.srcElement.name;
    }
}