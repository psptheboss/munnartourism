import { Routes, RouterModule }  from '@angular/router';

import { Trip006 } from './trip006.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip006
  }
];

export const routing = RouterModule.forChild(routes);
