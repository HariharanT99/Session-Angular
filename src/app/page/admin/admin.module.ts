import { NgModule } from "@angular/core";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminRoutingModule } from "./admin-routing.module";


@NgModule({
    declarations:[
        AdminHomeComponent
    ],
    imports: [
        AdminRoutingModule
    ]
})

export class AdminModule {
    constructor() {
        
    }
}