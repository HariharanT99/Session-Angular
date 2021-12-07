import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";


@Directive({
    selector: '[appImageValidator]'
})

export class ImageValidatorDirective {
    constructor(private element: ElementRef){

    }

    @Output() validateMessage = new EventEmitter<string>();


    @HostListener('change') OnChange(){
        console.log("file");
        this.FileCheck(this.element.nativeElement.value);
    }

    FileCheck(file: any){
        console.log("file check")
        console.log(file.type);

        let ext = (file.name).split('.').pop();
        let allImages: Array<string> = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];

        // if(allImages.indexOf(file.type) === -1){
        //     console.log('in');
        //     this.validateMessage.emit("false")
        //     this.element.nativeElement.value = '';
        // }

        this.validateMessage.emit("true")
    }
}