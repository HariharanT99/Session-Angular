import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { PageNotfoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { EmailComponent } from "./task/DirectiveExampleComponent/Email/email.component";

const appRoutes: Routes=[
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'user',
        loadChildren:() => import('./page/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'admin',
        loadChildren:() => import('./page/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        component: PageNotfoundComponent
    }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {
    constructor() {
    }
}