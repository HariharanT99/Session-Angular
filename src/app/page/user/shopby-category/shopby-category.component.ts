import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";
import { Category } from "src/app/model/category";
import { UserProduct } from "src/app/model/user-product";
import { SearchService } from "../service/search.service";


@Component({
    selector : 'app-shopby-category',
    templateUrl: './shopby-category.component.html',
    styleUrls: ['./shopby-category.component.scss']
})

export class ShopbyCategoryComponent implements OnDestroy {

    constructor
    (
        private apiEndPointService: ApiEndpointService,
        private httpService: HttpService,
        public search: SearchService

    ) 
    {
        this.search.GetCategory();        
        this.search.GetProductByCat();  
        
        this.getProductSubscription = new Subscription;
    }

    prodList: UserProduct[] = []; 

    getProductSubscription: Subscription;


    // GetProduct(catId?: number){

    //     if(catId == undefined)
    //     {
    //         this.getProductSubscription = this.httpService.get(this.apiEndPointService.getProduct())
    //         .subscribe((data) => {
    //             this.prodList.push(...data);
    //         })
    //     }
    //     else
    //     {
    //         this.getProductSubscription = this.httpService.get(this.apiEndPointService.getProductByCategory(catId))
    //         .subscribe((data) => {
    //             this.prodList = [];
    //             this.prodList.push(...data);
    //         })
    //     }
    // }

    // categoryList: Category[] = [];

    // GetCategory(){
    //     this.httpService.get(this.apiEndPointService.getCategory())
    //     .subscribe((data) => {
    //       this.categoryList.push(...data);
    //     })
    // }

    ngOnDestroy(): void {
        this.getProductSubscription.unsubscribe();
    }


    image: any = '';
    getImage(data: any){
        let objectURL = 'data:image/png;base64,' + data; 
        this.image = objectURL;
    }
}