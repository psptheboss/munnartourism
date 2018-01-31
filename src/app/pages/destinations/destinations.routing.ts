import { Routes, RouterModule} from '@angular/router';

import { Destinations } from './destinations.component';
import { WaterfallsndamsComponent } from './components/waterfallsndams/waterfallsndams.component';

const routes:Routes=[
    {
        path:"",
        component:Destinations,
        children:[
            {path:"waterfallsndams", component:WaterfallsndamsComponent}

        ]
    }
]
export const routing = RouterModule.forChild(routes)