import { Routes, RouterModule }  from '@angular/router';

import { Trip010 } from './trip010.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip010
  }
];

export const routing = RouterModule.forChild(routes);
