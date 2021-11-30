import { NgModule } from "@angular/core";
import { BannerComponent } from "src/app/shared/component/banner/banner.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserRoutingModule } from "./user-routing.module";


@NgModule({
    declarations: [
        UserHomeComponent,
        BannerComponent
    ],
    imports: [
        UserRoutingModule
    ],
    exports: [
    ]
})

export class UserModule {
    constructor() {
        
    }
}