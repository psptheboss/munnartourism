import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './packages.routing';
import { Packages } from './packages.component';
import { HoneymoonComponent } from 'app/pages/packages/components/honeymoon/honeymoon.component';
import { FamilyComponent } from './components/family/family.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations:[
        Packages,
        HoneymoonComponent,
        FamilyComponent
    ],
    providers:[

    ]
})
export class PackagesModule {}