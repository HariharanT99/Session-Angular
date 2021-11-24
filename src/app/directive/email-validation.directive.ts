import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector: '[appEmailValidation]'
})

export class EmailValidationDirective {

    constructor(private element: ElementRef) {
    }
    emailValidation = true;

    @HostListener('focusout') onFocusOut() {
         this.validateEmail(this.element.nativeElement.value)                                                              
    }

    validateEmail(email: string): any {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailValidation = regularExpression.test(String(email).toLowerCase());
        
        if(!this.emailValidation){
            this.element.nativeElement.style.border = "solid red 2px"; 
            this.element.nativeElement.name = "false"
        }
        else{
            this.element.nativeElement.style.border = "";
            this.element.nativeElement.name = "true"
        }
    }

}