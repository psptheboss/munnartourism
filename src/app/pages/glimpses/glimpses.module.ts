import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './glimpses.routing';
import { Glimpses } from 'app/pages/glimpses/glimpses.component';
import { MunnarComponent } from 'app/pages/glimpses/component/munnar/munnar.component';
import { ThekkadyComponent } from 'app/pages/glimpses/component/thekkady/thekkady.component';
import { WayanadComponent } from 'app/pages/glimpses/component/wayanad/wayanad.component';
import { AlleppeyComponent } from 'app/pages/glimpses/component/alleppey/alleppey.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations:[
        Glimpses,
        MunnarComponent,
        ThekkadyComponent,
        WayanadComponent,
        AlleppeyComponent
    ],
    providers:[

    ]
})
export class GlimpsesModule {}