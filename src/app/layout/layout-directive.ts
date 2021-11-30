import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
    selector: '[appLayout]'
})

export class LayoutDirective {

    constructor (private element: ElementRef){

    }

    

    Menu = false

    @HostListener('click') OnClick(){
        
        this.Menu = !this.Menu;
        console.log(this.Menu)

    }
}