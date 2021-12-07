import { Component } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    constructor (){

    }


    Menu = false;

    ShowMenu() {
        this.Menu= !this.Menu;
    }

}