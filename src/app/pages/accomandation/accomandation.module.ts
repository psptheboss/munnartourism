import { NgModule } from '@angular/core';
import { Accomandation } from './accomandation.component';
import { routing  } from './accomandation.routing';
import { NgaModule } from 'app/theme/nga.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

@NgModule({
    imports:[
        NgaModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        CommonModule

    ],
    declarations:[
        Accomandation
    ],
    providers:[
        
    ]
})

export class AccomandationModule {}