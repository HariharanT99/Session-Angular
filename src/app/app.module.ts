import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SideNavComponent } from "./layout/side-nav/side-nav.component";
import { SearchBarComponent } from "./shared/component/search-bar/search-bar.component";
import { HeaderComponent } from "./layout/Header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotfoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { TaskModule } from "./task/task.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavListComponent } from "./layout/side-nav/nav-list/nav-list.component";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutDirective } from "./layout/layout-directive";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from "./auth/login/login.component";
import { FooterComponent } from "./layout/footer/footer.component";




@NgModule ({
    declarations: [
        AppComponent,
        SideNavComponent,
        SearchBarComponent,
        HeaderComponent,
        PageNotfoundComponent,
        NavListComponent,
        LayoutComponent,
        LayoutDirective,
        LoginComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TaskModule,
        FlexLayoutModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}