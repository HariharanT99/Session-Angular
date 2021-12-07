import { NgModule } from "@angular/core";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserRoutingModule } from "./user-routing.module";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from "./cart/cart.component";
import { SharedModule } from "src/app/shared/shared.module";





@NgModule({
    declarations: [
        UserHomeComponent,
        CartComponent
    ],
    imports: [
        UserRoutingModule,
        CommonModule,
        SharedModule
    ],
    exports: [
    ]
})

export class UserModule {
    constructor() {
        
    }
}