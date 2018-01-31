import {NgModule} from '@angular/core';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './destinations.routing';

import { Destinations } from './destinations.component';
import { WaterfallsndamsComponent } from 'app/pages/destinations/components/waterfallsndams/waterfallsndams.component';

@NgModule({
    imports:[
        NgaModule,
        routing
    ],
    declarations:[
        Destinations,
        WaterfallsndamsComponent
    ],
    providers:[

    ]
})
export class DestinationsModule {}