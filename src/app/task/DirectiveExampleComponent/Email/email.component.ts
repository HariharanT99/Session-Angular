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

    countryCode = '+91';

    CheckEmailValidation(element: any){
        this.emailvalidation = element.srcElement.name;
    }


    // Phone Number Validation

    phoneValidation = "true";

    CheckPhoneValidation(element: any){
        this.phoneValidation = element.srcElement.name;
    }

    //Date Validation

    dateValidation = "true";
    inputValidation = "true";
    lengthValidation = "true";
    displayDate = "true";

    date = '';

    seperator = '';

    CheckDateValidation(element: any){
        this.dateValidation = element.srcElement.name;
        this.date = element.srcElement.name;
        this.displayDate = element.srcElement.name;
    }

    CheckInput(element: any) {
        if(element.srcElement.value.length > 8)
        {
            this.lengthValidation = element.srcElement.name;
        }
        else
        {
            this.inputValidation = element.srcElement.name;
            if(element.srcElement.value.length <= 8) {
                this.lengthValidation = "true";
            }
        }
    }

    SetCountryCode(code: string) {
        console.log(code)
        this.countryCode = code;
    }
}