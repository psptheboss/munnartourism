import { Routes ,RouterModule } from "@angular/router";

import { AboutusComponent } from "./aboutus.component";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

export const routes:Routes=[
    {
        path:"",
        component:AboutusComponent
    }
]
export const routing:ModuleWithProviders = RouterModule.forChild(routes)