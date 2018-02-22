import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Trip007 } from './trip007.component'
import { routing } from './trip007.routing'; 


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      NgaModule,
      routing
    ],
    declarations: [
      Trip007
    ]
  })
  export class Trip007Module {}
  