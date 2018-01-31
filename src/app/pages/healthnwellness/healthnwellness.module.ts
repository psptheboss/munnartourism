import { NgModule} from '@angular/core';
import { NgaModule } from '../../theme/nga.module';

import { routing } from "./healthnwellness.routing";
import { Healthnwellness } from 'app/pages/healthnwellness/healthnwellness.component';
import { AyurvedaComponent } from 'app/pages/healthnwellness/components/ayurveda/ayurveda.component';
import { YogaComponent } from 'app/pages/healthnwellness/components/yoga/yoga.component';


@NgModule({
    imports:[

        NgaModule,
        routing
    ],
    declarations:[
        Healthnwellness,
        AyurvedaComponent,
        YogaComponent
    ],
    providers:[

    ]
})
export class HealthnwellnessModule {}