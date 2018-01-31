import { Routes, RouterModule} from '@angular/router';
import { Festivalsnevents } from './festivalsnevents.component'
import { FestivalsComponent } from './components/festivals/festivals.component'
import { EventsComponent } from './components/events/events.component';

const routes:Routes=[
    {
        path:'',
        component:Festivalsnevents,
        children:[
            {
                path:"festivals",component:FestivalsComponent
            },
            {
                path:"events",component:EventsComponent
            }
        ]
    }
]
export const routing = RouterModule.forChild(routes)