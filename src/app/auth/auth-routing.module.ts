import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "../page/admin/admin-home/admin-home.component";
import { UserHomeComponent } from "../page/user/user-home/user-home.component";
import { PageNotfoundComponent } from "../shared/component/page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth.guard";
import { LoginComponent } from "./login/login.component";

const authorizeRoutes: Routes =[
    // {
    //     path: '',
    //     component: LoginComponent
    // },
    {
        path: 'admin-home',
        component: AdminHomeComponent
    },
    {
        path: 'user-home',
        component: UserHomeComponent,
        canActivate: [AuthGuardService]
    }
]

@NgModule({
    imports: [RouterModule.forChild(authorizeRoutes)],
    exports: [CommonModule,RouterModule]
})

export class AuthRoutingModule {
    constructor() {
        
    }
}