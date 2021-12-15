import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { BannerComponent } from "./component/banner/banner.component";
import { NoDataComponent } from "./component/no-data/no-data.component";
import { ProductCardComponent } from "./component/product-card/product-card.component";
import { SearchBarComponent } from "./component/search-bar/search-bar.component";


@NgModule({
    declarations:[
        ProductCardComponent,
        SearchBarComponent,
        BannerComponent,
        NoDataComponent
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
        NoDataComponent,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule
    ]
})

export class SharedModule {}