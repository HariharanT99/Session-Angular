import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";
import { AuthService } from "src/app/auth/auth.service";
import { UserProduct } from "src/app/model/user-product";

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent {
    constructor(
        private apiEndPointService: ApiEndpointService,
        private httpService: HttpService,
        private authService: AuthService,
        private router: Router
        ) {
            this.GetProduct();
    }

    prodList: UserProduct[] = []; 


    GetProduct(){
        this.httpService.get(this.apiEndPointService.getProduct())
        .subscribe((data) => {
            console.log(data);
            this.prodList.push(...data);
        })
    }

    Logout(){
        this.authService.Logout()
        setTimeout(() =>{
            this.router.navigate(['/'])
        },1000)
    }
}