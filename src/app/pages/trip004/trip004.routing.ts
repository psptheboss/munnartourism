import { Routes, RouterModule }  from '@angular/router';

import { Trip004 } from './trip004.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip004
  }
];

export const routing = RouterModule.forChild(routes);
