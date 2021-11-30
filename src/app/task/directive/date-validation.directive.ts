import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[appDateValidation]'
})

export class DateValidationDirective {
    constructor(private element: ElementRef) {
    }

    dateValidation = true;

    @Input() seperator: string = "";


    @HostListener('focusout') OnFocusOut() {
        // this.formatedDate = "";

        if(!this.seperator){
            this.seperator = '/';
        }

        this.ValidateDate(this.element.nativeElement.value)
    }

    @HostListener('keyup') OnKeyUp() {
        this.CheckInput(this.element.nativeElement.value)
    }

    CheckInput(input: string) {
        // const regularExpression = /[0-9]/;
        this.dateValidation = !isNaN(Number(input))

        if(!this.dateValidation || input.length > 8){
            this.element.nativeElement.style.border = "solid red 2px"; 
            this.element.nativeElement.name = "false"
        }
        else{
            this.element.nativeElement.style.border = "";
            this.element.nativeElement.name = "true"
        }
    }

    ValidateDate(date: string){
        if(date == ""){
            this.element.nativeElement.name = "req";
        }
        else{
            const regularExpression = /^[0-9]{8}$/;
            this.dateValidation = regularExpression.test(String(date));

            if(!this.dateValidation || Number(date) == 0){
                this.element.nativeElement.style.border = "solid red 2px"; 
                this.element.nativeElement.name = "false"
            }
            else{
                this.element.nativeElement.style.border = "";
                this.element.nativeElement.name = "true";
                this.DateCheck(this.element.nativeElement.value)
            }
        }
    }

    formatedDate: string[] = [];



    DateCheck(date: string) {
        var dd = "";
        var mm = "";
        var yyyy = "";

        var outdate = "";

        dd = date.slice(0,2);
        mm = date.slice(2,4)
        yyyy = date.slice(4);

        if(Number(dd) > 31 || Number(dd) == 0){
            this.element.nativeElement.name = "dinvalid";
        }
        else if(Number(mm) > 12 || Number(mm) == 0){
            this.element.nativeElement.name = "minvalid";
        }
        else{
            this.formatedDate.push(dd);
            this.formatedDate.push(mm);
            this.formatedDate.push(yyyy);
            outdate = this.formatedDate.join(this.seperator)
            this.element.nativeElement.name = outdate;
        }

        // for(let i = 0; i < date.length; i++)
        // {
        //     if(i == 2){
        //         if(Number(this.formatedDate) > 31){
        //             this.element.nativeElement.name = "dinvalid";
        //             break;
        //         }
        //         else{
        //             this.formatedDate += "/";
        //             this.formatedDate += date[i];
        //         }
                
        //     }
        //     else if(i == 4){
        //         this.mm = this.formatedDate.slice(3);
        //         console.log("mm"+this.mm)
        //         if(Number(this.mm) > 12){
        //             console.log("If in")
        //             this.element.nativeElement.name = "minvalid"
        //             break
        //         }
        //         else{
        //             this.formatedDate += "/";
        //             this.formatedDate += date[i];
        //         }
        //     }
        //     else{
        //         this.formatedDate += date[i];
        //     }
        // }
        // if(this.formatedDate.length == 10){
        //     this.element.nativeElement.name = this.formatedDate;
        // }
    }
}