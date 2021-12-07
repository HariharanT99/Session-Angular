import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { UserHomeComponent } from "./user-home/user-home.component";


const userRoutes: Routes = [
    {
        path: '',
        component: UserHomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [
        RouterModule
    ]

})

export class UserRoutingModule{
    
}