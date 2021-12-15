import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";
import { UserProduct } from "src/app/model/user-product";
import {Picture} from 'src/app/model/picture';
import { Category } from "src/app/model/category";

@Injectable({
    providedIn: 'root'
})

export class SearchService implements OnDestroy {

    constructor
    (
        private apiEndPointService: ApiEndpointService,
        private httpService: HttpService,
    )
    {
        this.getProductSubscription = new Subscription;
        // this.getPicSubscription = new Subscription;

        this.formData = new FormData;

        this.picSubscription = new Subscription;
        this.catSubscription = new Subscription;
    }

    prodList: UserProduct[] = [];

    getProductSubscription: Subscription;
    // getPicSubscription: Subscription;

    image: any;
    
    getImage(data: any){
        this.image = ('data:image/png;base64,' + data);
    }


    GetProduct(name?: string){

        if(name){
            this.getProductSubscription = this.httpService.get(this.apiEndPointService.getProductByName(name))
            .subscribe((data) => {
                this.prodList = [];
                this.prodList.push(...data);
            })
        }
        else{
            this.getProductSubscription = this.httpService.get(this.apiEndPointService.getProduct())
            .subscribe((data) => {
                console.log(data)
                this.prodList = [];
                this.prodList.push(...data)
            })
        }

    }

    GetProductByCat(catId?: number){
        if(catId == undefined)
        {
            this.getProductSubscription = this.httpService.get(this.apiEndPointService.getProduct())
            .subscribe((data) => {
                this.prodList = [];
                this.prodList.push(...data);
            })
        }
        else
        {
            this.getProductSubscription = this.httpService.get(this.apiEndPointService.getProductByCategory(catId))
            .subscribe((data) => {
                this.prodList = [];
                this.prodList.push(...data);
            })
        }
    }

    categoryList: Category[] = [];
    catSubscription: Subscription;
    
    GetCategory(){
        this.httpService.get(this.apiEndPointService.getCategory())
        .subscribe((data) => {
          this.categoryList.push(...data);
        })
    }

    ngOnDestroy(): void {
        this.getProductSubscription.unsubscribe();
        this.catSubscription.unsubscribe();
    }

    formData: FormData;
    picSubscription: Subscription;


    // FetchImage(brand: string, category: string, pic: Picture): void {
    //     console.log("fetch")
    //     console.log(brand);
    //     console.log(pic);

    //     if(pic){
    //         this.formData.append('Brand',brand);
    //         this.formData.append('Category',category);
    //         this.formData.append('Version', pic.version);

            
    //     this.picSubscription = this.httpService.post(this.apiEndPointService.getImage(), this.formData)
    //     .subscribe({
    //         next: response => {
    //             console.log(response);
    //             this.getImage(response);
    //         },
    //         error: (err) =>{
    //             console.log(err)
    //         }
    //     })
    //     }

    // }
}