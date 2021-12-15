import { NgModule } from "@angular/core";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserRoutingModule } from "./user-routing.module";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from "./cart/cart.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ShopbyCategoryComponent } from "./shopby-category/shopby-category.component";
import {MatSelectModule} from '@angular/material/select';





@NgModule({
    declarations: [
        UserHomeComponent,
        CartComponent,
        ShopbyCategoryComponent
    ],
    imports: [
        UserRoutingModule,
        CommonModule,
        SharedModule,
        MatSelectModule
    ],
    exports: [
    ]
})

export class UserModule {
    constructor() {
        
    }
}