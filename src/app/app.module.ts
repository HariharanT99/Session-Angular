import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { SideNavComponent } from "./layout/side-nav/side-nav.component";
import { SearchBarComponent } from "./shared/component/search-bar/search-bar.component";
import { HeaderComponent } from "./layout/Header/header.component";
import { ParentComponent } from "./LifeCycleHooks/parent/parent.component";
import { ChildComponent } from "./LifeCycleHooks/child/child.component";
import { EmailValidationDirective } from "./directive/email-validation.directive";
import { EmailComponent } from "./DirectiveExampleComponent/Email/email.component";
import { ErrorDirective } from "./directive/error.directive";
import { PhoneValidationDirective } from "./directive/phone-validation.directive";
import { DateValidationDirective } from "./directive/date-validation.directive";
import { DateSeperatorDirective } from "./directive/date-seperator.directive";
import { ServiceModule } from "./ServiceExample/service.module";
import { ServiceConsumeComponent } from "./ServiceExample/component/service-consume.component";
import { ServiceBService } from "./ServiceExample/service/serviceB.service";



@NgModule ({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        SideNavComponent,
        SearchBarComponent,
        HeaderComponent,
        EmailValidationDirective,
        EmailComponent,
        ErrorDirective,
        PhoneValidationDirective,
        DateValidationDirective,
        DateSeperatorDirective,
        ServiceConsumeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ServiceModule
    ],
    exports: [],
    bootstrap: [AppComponent],
    providers: [ServiceBService]
})

export class AppModule {}