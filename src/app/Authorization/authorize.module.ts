import { NgModule } from "@angular/core";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { LoginComponent } from "./login/login.component";
import { UserHomeComponent } from "./user/user-home/user-home.component";



@NgModule({
    declarations: [
        LoginComponent,
        UserHomeComponent,
        AdminHomeComponent
    ],
    imports: [],
    exports: []
})

export class AuthorizeModule {

}