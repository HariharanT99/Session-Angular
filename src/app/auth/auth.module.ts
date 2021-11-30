import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminHomeComponent } from "../page/admin/admin-home/admin-home.component";
import { UserHomeComponent } from "../page/user/user-home/user-home.component";
import { UserModule } from "../page/user/user.module";
import { AuthRoutingModule } from "./auth-routing.module";



@NgModule({
    declarations: [
    ],
    imports: [UserModule, AuthRoutingModule, ReactiveFormsModule],
    exports: [
    ]
})

export class AuthModule {

}