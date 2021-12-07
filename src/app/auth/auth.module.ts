import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
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