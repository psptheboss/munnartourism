import { NgModule } from "@angular/core";
import { AboutusComponent } from './aboutus.component'
import { routing } from "./aboutus.routing";

@NgModule({
    imports:[
        routing
    ],
    declarations:[
        AboutusComponent
    ]
})

export class AboutusModule{}