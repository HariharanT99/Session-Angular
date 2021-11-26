import { NgModule } from "@angular/core";
import { ServiceConsumeComponent } from "./component/service-consume.component";
import { ServiceConsume2Component } from "./component/service-consume2/service-consume2.component";
import { ServiceBService } from "./service/serviceB.service";


@NgModule({
    declarations:[
        ServiceConsume2Component
    ],
    imports: [],
    exports: [
        ServiceConsume2Component
    ],
    providers: [ServiceBService]
})

export class ServiceModule {}