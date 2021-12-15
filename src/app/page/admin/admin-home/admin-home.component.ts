import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";
import { AuthService } from "src/app/auth/auth.service";
import { UserProduct } from "src/app/model/user-product";
import { SearchService } from "../../user/service/search.service";

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnDestroy {
    constructor(
        private apiEndPointService: ApiEndpointService,
        private httpService: HttpService,
        private authService: AuthService,
        private router: Router,
        public service: SearchService
        ) 
        {
            this.service.GetProduct();

            this.formData = new FormData;

            this.picSubscription = new Subscription;
        }

    // prodList: UserProduct[] = []; 


    // GetProduct(){
    //     this.httpService.get(this.apiEndPointService.getProduct())
    //     .subscribe((data) => {
    //         this.prodList.push(...data);
    //     })
    // }

    formData: FormData;

    picSubscription: Subscription;
    GetPic(version: string, brand: string, category: string){
        this.formData.append('Brand',brand);
        this.formData.append('Category',category);
        this.formData.append('Version',version);
        console.log(category)


        this.picSubscription = this.httpService.post(this.apiEndPointService.getImage(), this.formData)
        .subscribe({
            next: response => {
                console.log(response);
                this.getImage(response);
            },
            error: (err) =>{
                console.log(err)
            }
        })
    }

    ngOnDestroy(): void {
        this.picSubscription.unsubscribe();
    }

    Logout(){
        this.authService.Logout()
        setTimeout(() =>{
            this.router.navigate(['/'])
        },1000)
    }

    image: any;
    
    getImage(data: any){
        this.image = ('data:image/png;base64,' + data);
    }
}