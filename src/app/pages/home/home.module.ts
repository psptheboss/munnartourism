import { NgModule } from  '@angular/core'
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { HomeComponent } from './home.component'
import { routing }       from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';


@NgModule({
    imports:[
        AppTranslationModule,
         NgaModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        CommonModule

    ],
    declarations:[
        HomeComponent
    ],
    providers:[

    ]
})

export class HomeModule {}