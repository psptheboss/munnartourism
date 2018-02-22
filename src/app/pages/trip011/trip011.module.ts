import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Trip011 } from './trip011.component'
import { routing } from './trip011.routing'; 


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgaModule,
      routing
    ],
    declarations: [
      Trip011
    ]
  })
  export class Trip011Module {}
  