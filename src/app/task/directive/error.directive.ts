import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector: '[appError]'
})

export class ErrorDirective {

    constructor(private element: ElementRef) {
        element.nativeElement.id = "error";
    }
}