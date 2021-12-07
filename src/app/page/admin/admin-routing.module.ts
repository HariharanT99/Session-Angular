import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";


const adminRoutes: Routes = [
    {
        path: '',
        component: AdminHomeComponent
    },
    {
        path: 'add-product',
        component: AddProductComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule{
    
}