import { Routes, RouterModule }  from '@angular/router';

import { Trip012 } from './trip012.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip012
  }
];

export const routing = RouterModule.forChild(routes);
