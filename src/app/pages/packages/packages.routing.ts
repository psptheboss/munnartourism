import { Routes, RouterModule }  from '@angular/router';

import { Packages } from './packages.component';
import { HoneymoonComponent } from './components/honeymoon/honeymoon.component'
import { FamilyComponent} from './components/family/family.component';

const routes : Routes = [
    {
        path:'',
        component:Packages,
        children:[
            { path: 'honeymoon',  component:HoneymoonComponent},
            { path: 'family',     component:FamilyComponent}
        ]
    }
];
export const routing = RouterModule.forChild(routes);