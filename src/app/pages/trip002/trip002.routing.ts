import { Routes, RouterModule }  from '@angular/router';

import { Trip002 } from './trip002.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip002
  }
];

export const routing = RouterModule.forChild(routes);
