import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Trip008 } from './trip008.component'
import { routing } from './trip008.routing'; 


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgaModule,
      routing
    ],
    declarations: [
      Trip008
    ]
  })
  export class Trip008Module {}
  