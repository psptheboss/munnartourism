import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Trip010 } from './trip010.component'
import { routing } from './trip010.routing'; 


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgaModule,
      routing
    ],
    declarations: [
      Trip010
    ]
  })
  export class Trip010Module {}
  