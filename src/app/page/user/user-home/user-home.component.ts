import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";
import { AuthService } from "src/app/auth/auth.service";
import { UserProduct } from "src/app/model/user-product";
import { SearchService } from "../service/search.service";


@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.scss']
})

export class UserHomeComponent implements OnInit {
    constructor(
        public apiEndPointService: ApiEndpointService,
        public httpService: HttpService,
        private authService: AuthService,
        private router: Router,
        public search: SearchService
        ) {}


    imagePath = '../../../../assets/image/Master-banner.jpg';

    // getImage(data: any) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => re e.target?.result;
    //         reader.readAsDataURL(new Blob([data]));
    // }

    ngOnInit() {
        this.search.GetProduct();
    }

    // image: any = '';
    getImage(data: any){
        return ('data:image/png;base64,' + data);
        // return objectURL;
    }

    // getpic(id: any){

    //     console.log(id);

    //     this.httpService.get(this.apiEndPointService.getPic(id))
    //     .subscribe( data => {
    //         console.log(data);
    //         return data;
    //     })
    // }


    // GetProduct(){
    //     // const token = localStorage.getItem('jwt');
    //     // var header = `Bearer ${token}`;
    //     this.httpService.get(this.apiEndPointService.getProduct())
    //     .subscribe((data) => {
    //         //console.log(data)
    //         //console.log(data[7].images[0]);
    //         // const reader = new FileReader();
    //         // reader.onload = (e) => this.image = e.target?.result;
    //         // reader.readAsDataURL(new Blob([data]));

    //         // this.image = data.

    //         this.prodList.push(...data);
    //     })
    // }

    Logout(){
        this.authService.Logout()
        setTimeout(() =>{
            this.router.navigate(['/'])
        },1000)
    }
}