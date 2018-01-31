import { Routes, RouterModule } from '@angular/router';
import { Accomandation } from './accomandation.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';


export const routes:Routes=[
    {
        path:'',
        component:Accomandation
    }
]

export const routing:ModuleWithProviders = RouterModule.forChild(routes)