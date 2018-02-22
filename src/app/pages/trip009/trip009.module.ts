import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Trip009 } from './trip009.component'
import { routing } from './trip009.routing'; 


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgaModule,
      routing
    ],
    declarations: [
      Trip009
    ]
  })
  export class Trip009Module {}
  