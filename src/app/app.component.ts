import { Component, NgModule } from "@angular/core";
import { ApiEndpointService } from "./api-service/http.endpoint";
import { HttpService } from "./api-service/http.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor
    (
        private apiEndPointService: ApiEndpointService,
        private httpService: HttpService
    ) {        
    }
}