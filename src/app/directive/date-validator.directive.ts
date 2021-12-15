import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";


@Directive({
    selector: '[appDateValidator]'
})

export class DateValidatorDirective {
    constructor(private element: ElementRef){

    }

    @Output() validationMessage = new EventEmitter<string>();

    @HostListener('change') OnChange(){
        this.CheckDate(this.element.nativeElement.value)
    }

    CheckDate(input: Date){
        let dateTime = new Date()
        let date = new Date(input);
        console.log("is "+date);
        console.log("out "+ dateTime)
        if(dateTime.getDate() > date.getDate()){
            this.validationMessage.emit("false")
        }
        else{
            this.validationMessage.emit("true")
        }
    }

}