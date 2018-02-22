import { Routes, RouterModule }  from '@angular/router';

import { Trip008 } from './trip008.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip008
  }
];

export const routing = RouterModule.forChild(routes);
