import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[appPhoneValidation]'
})

export class PhoneValidationDirective {

    constructor(private element: ElementRef){}

    phoneValidation = true;

    @Input() countryCde = "+91";

    @HostListener('focusout') OnFocusOut() {
        this.ValidatePhone(this.element.nativeElement.value)
    }

    ValidatePhone(inptNumber: string){
        if(inptNumber == ""){
            this.element.nativeElement.name = "req";
        }
        else{
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
}