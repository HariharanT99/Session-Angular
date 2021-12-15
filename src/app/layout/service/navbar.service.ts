import { Injectable } from "@angular/core";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";


@Injectable({
    providedIn: 'root'
})

export class NavbarService {

    constructor
    (
        private apiEndPointService: ApiEndpointService,
        private httpService: HttpService
    ) 
    {
        this.GetNav();

        this.showNav = !!localStorage.getItem('nav');
        console.log("show"+this.showNav)
        // this.navbar = !localStorage.getItem('nav');
        // console.log("after"+this.navbar);

    }

    // navbar: boolean;

    showNav: boolean ;

    SetNav(){
        this.showNav = !this.showNav;
        // localStorage.setItem('nav',JSON.stringify(this.showNav));
        this.httpService.put(this.apiEndPointService.setNavbar())
        .subscribe(success => {
            console.log(success)
            // localStorage.setItem('nav',success)
            // this.showNav = !!localStorage.getItem('nav')
            // console.log("afterget"+this.showNav)

        })



    }

    GetNav(){
        this.httpService.get(this.apiEndPointService.getNavbar())
        .subscribe(
            (data) => {
                console.log("app"+data);
                console.log("ss"+this.showNav);
                localStorage.setItem('nav',JSON.stringify(data));
            }
        )
    }
}