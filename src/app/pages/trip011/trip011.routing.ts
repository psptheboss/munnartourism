import { Routes, RouterModule }  from '@angular/router';

import { Trip011 } from './trip011.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Trip011
  }
];

export const routing = RouterModule.forChild(routes);
