import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateValidatorDirective } from "src/app/directive/date-validator.directive";
import { ImageValidatorDirective } from "src/app/directive/image.directive";
import { AddProductComponent } from "./add-product/add-product.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminRoutingModule } from "./admin-routing.module";
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { ProductCardComponent } from "src/app/shared/component/product-card/product-card.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations:[
        AdminHomeComponent,
        AddProductComponent,
        ImageValidatorDirective,
        DateValidatorDirective
    ],
    imports: [
        AdminRoutingModule,
        FormsModule,
        RxReactiveFormsModule,
        ReactiveFormsModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        SharedModule
    ]
})

export class AdminModule {
    constructor() {
        
    }
}