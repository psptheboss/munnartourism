import { Routes, RouterModule }  from '@angular/router';

import { Trip003 } from './trip003.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip003
  }
];

export const routing = RouterModule.forChild(routes);
