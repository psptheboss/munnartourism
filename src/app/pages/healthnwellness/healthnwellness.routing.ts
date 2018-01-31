import { Routes,RouterModule} from '@angular/router';

import { Healthnwellness } from './healthnwellness.component'
import { AyurvedaComponent } from './components/ayurveda/ayurveda.component'
import { YogaComponent } from './components/yoga/yoga.component';

const routes:Routes=[
    {
        path:'',
        component: Healthnwellness,
        children:[
            {
                path:"ayurveda" ,component:AyurvedaComponent
            },
            {
                path:"yoga" ,component:YogaComponent
            }
        ]
    }

]
 export const routing = RouterModule.forChild(routes);