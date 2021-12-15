import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SideNavComponent } from "./layout/side-nav/side-nav.component";
import { HeaderComponent } from "./layout/Header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotfoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { TaskModule } from "./task/task.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavListComponent } from "./layout/side-nav/nav-list/nav-list.component";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutDirective } from "./layout/layout-directive";
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from "./auth/login/login.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { JwtModule } from "@auth0/angular-jwt";
import { UnauthorizedComponent } from "./shared/component/unauthorized/unauthorized.component";
import { TopNavComponent } from "./layout/top-nav/top-nav.component";
import { TopNavListComponent } from "./layout/top-nav/top-nav-list/top-nav-list.component";

export function tokenGetter() {
    return  localStorage.getItem("jwt"); //'testtoken';
}


@NgModule ({
    declarations: [
        AppComponent,
        SideNavComponent,
        TopNavComponent,
        HeaderComponent,
        PageNotfoundComponent,
        NavListComponent,
        TopNavListComponent,
        LayoutComponent,
        LayoutDirective,
        LoginComponent,
        FooterComponent,
        UnauthorizedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TaskModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['localhost:44396'],
                disallowedRoutes: []
            }
        })
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}