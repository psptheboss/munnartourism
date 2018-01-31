import { NgModule }      from '@angular/core';
import { NgaModule } from '../../theme/nga.module';

import { routing } from "./festivalsnevents.routing";

import { Festivalsnevents } from "app/pages/festivalsnevents/festivalsnevents.component";
import { FestivalsComponent } from "app/pages/festivalsnevents/components/festivals/festivals.component";
import { EventsComponent } from "app/pages/festivalsnevents/components/events/events.component";

@NgModule({
    imports:[
       
        NgaModule,
        routing
    ],
    declarations:[
        Festivalsnevents,
        FestivalsComponent,
        EventsComponent
    ],
    providers:[

    ]
})
export class FestivalsneventsModule {}