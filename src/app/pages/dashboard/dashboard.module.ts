import { NgModule } from  '@angular/core'
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { routing} from './dashboard.routing'
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
@NgModule({
    imports:[
       routing,
       FormsModule,
       ReactiveFormsModule,
       CommonModule
       

    ],
    declarations:[
        DashboardComponent
    ],
    providers:[

    ]
})

export class DashboardModule {}