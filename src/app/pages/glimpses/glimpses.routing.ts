import { Routes, RouterModule }  from '@angular/router';

import { Glimpses } from './glimpses.component';
import { MunnarComponent } from './component/munnar/munnar.component'
import { AlleppeyComponent} from './component/alleppey/alleppey.component';
import { ThekkadyComponent} from './component/thekkady/thekkady.component';
import { WayanadComponent} from './component/wayanad/wayanad.component';


const routes : Routes = [
    {
        path:'',
        component:Glimpses,
        children:[
            { path: 'munnar',  component:MunnarComponent},
            { path: 'alleppey',     component:AlleppeyComponent},
            { path: 'thekkady',     component:ThekkadyComponent},
            { path: 'wayanad',     component:WayanadComponent}
            
        ]
    }
];
export const routing = RouterModule.forChild(routes);