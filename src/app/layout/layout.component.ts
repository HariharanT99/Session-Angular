import { Component, Input } from "@angular/core";
import { NavbarService } from "./service/navbar.service";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

    constructor
    (
        public navService: NavbarService
    ) 
    {
            
    }
}