import { Routes, RouterModule }  from '@angular/router';

import { Trip009 } from './trip009.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip009
  }
];

export const routing = RouterModule.forChild(routes);
