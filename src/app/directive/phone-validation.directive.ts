import { Directive, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector: '[appPhoneValidation]'
})

export class PhoneValidationDirective {

    constructor(private element: ElementRef){}

    phoneValidation = true;

    @HostListener('focusout') OnFocusOut() {
        this.ValidatePhone(this.element.nativeElement.value)
    }

    ValidatePhone(inptNumber: string){
        const regularExpression = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        this.phoneValidation = regularExpression.test(String(inptNumber));

        if(!this.phoneValidation){
            this.element.nativeElement.style.border = "solid red 2px"; 
            this.element.nativeElement.name = "false"
        }
        else{
            this.element.nativeElement.style.border = "";
            this.element.nativeElement.name = "true"
        }
    }
}