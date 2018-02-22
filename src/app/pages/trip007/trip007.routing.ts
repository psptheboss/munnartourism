import { Routes, RouterModule }  from '@angular/router';

import { Trip007 } from './trip007.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip007
  }
];

export const routing = RouterModule.forChild(routes);
