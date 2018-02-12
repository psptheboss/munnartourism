import { Routes, RouterModule }  from '@angular/router';

import { Trip001 } from './trip001.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip001
  }
];

export const routing = RouterModule.forChild(routes);
