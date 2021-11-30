import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appDateSeperator]'
})

export class DateSeperatorDirective {

    constructor(private element: ElementRef) {
        this.formatedDate = '';
    }

    formatedDate: string = "";

    @HostListener('focusout') OnFocusOut(){
        
    }




    
    // DateCheck(date: string) {
    //     console.log("Date"+ date)

    //     for(let i = 0; i < date.length; i++)
    //     {
    //         if(i == 2){
    //             this.formatedDate += "/";
    //             this.formatedDate += date[i];
    //         }
    //         else if(i == 4){
    //             this.formatedDate += "/";
    //             this.formatedDate += date[i];
    //         }
    //         else{
    //             this.formatedDate += date[i];
    //         }
    //     }
    //     console.log(this.formatedDate)
    //     this.element.nativeElement.name = this.formatedDate;
    // }
    
}