import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { BannerComponent } from "./component/banner/banner.component";
import { ProductCardComponent } from "./component/product-card/product-card.component";
import { SearchBarComponent } from "./component/search-bar/search-bar.component";


@NgModule({
    declarations:[
        ProductCardComponent,
        SearchBarComponent,
        BannerComponent
    ],
    imports:[
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    exports:[
        ProductCardComponent,
        BannerComponent,
        SearchBarComponent,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule
    ]
})

export class SharedModule {}