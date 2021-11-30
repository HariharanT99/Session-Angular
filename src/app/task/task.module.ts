import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DateSeperatorDirective } from "./directive/date-seperator.directive";
import { DateValidationDirective } from "./directive/date-validation.directive";
import { EmailValidationDirective } from "./directive/email-validation.directive";
import { ErrorDirective } from "./directive/error.directive";
import { PhoneValidationDirective } from "./directive/phone-validation.directive";
import { EmailComponent } from "./DirectiveExampleComponent/Email/email.component";
import { ChildComponent } from "./LifeCycleHooks/child/child.component";
import { ParentComponent } from "./LifeCycleHooks/parent/parent.component";
import { ServiceConsumeComponent } from "./ServiceExample/component/service-consume.component";
import { ServiceConsume2Component } from "./ServiceExample/component/service-consume2/service-consume2.component";
import { ServiceModule } from "./ServiceExample/service.module";


@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        EmailValidationDirective,
        ErrorDirective,
        PhoneValidationDirective,
        DateValidationDirective,
        DateSeperatorDirective,
        EmailComponent,
        ServiceConsumeComponent
    ],
    imports: [
        ServiceModule,
        BrowserModule,
        FormsModule
    ],
    exports: []
})

export class TaskModule {
    
}