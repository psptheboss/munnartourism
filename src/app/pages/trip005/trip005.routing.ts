import { Routes, RouterModule }  from '@angular/router';

import { Trip005 } from './trip005.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip005
  }
];

export const routing = RouterModule.forChild(routes);
