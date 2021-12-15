import { Component } from "@angular/core";
import { SearchService } from "src/app/page/user/service/search.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    constructor 
    (
        public search: SearchService
    ){

    }

    Menu = false;



    ShowMenu() {
        this.Menu= !this.Menu;
    }

}