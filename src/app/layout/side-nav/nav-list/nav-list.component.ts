import { Component } from "@angular/core";
import { json } from "@rxweb/reactive-form-validators";
import { NavbarService } from "../../service/navbar.service";


@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls:['./nav-list.component.scss']
})

export class NavListComponent {

    constructor
    (
        public navService: NavbarService
    ) 
    {
        this.UserRole =  localStorage.getItem('UserRole') || '';
    }

    UserRole = '';

}