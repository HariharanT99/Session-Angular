import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserHomeComponent } from "./user-home/user-home.component";


const userRoutes: Routes = [
    {
        path: '',
        component: UserHomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],

})

export class UserRoutingModule{
    
}