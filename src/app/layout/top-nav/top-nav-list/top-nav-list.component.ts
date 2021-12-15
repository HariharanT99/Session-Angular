import { Component } from "@angular/core";
import { NavbarService } from "../../service/navbar.service";

@Component({
    selector: 'app-top-nav-list',
    templateUrl: './top-nav-list.component.html',
    styleUrls: ['./top-nav-list.component.scss']
})


export class TopNavListComponent {

    constructor
    (
        public navService: NavbarService
    ) {
        this.UserRole =  localStorage.getItem('UserRole') || '';
    }

    UserRole = '';
}