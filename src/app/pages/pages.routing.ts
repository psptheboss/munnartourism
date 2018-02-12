import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuardGuard } from '../auth-guard.guard';
// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    
    loadChildren: 'app/pages/register/register.module#RegisterModule',
    
  },
  {
    path: 'trip001',
    
    loadChildren: 'app/pages/trip001/trip001.module#Trip001Module',
    
  },
  {
    path: 'trip002',
    
    loadChildren: 'app/pages/trip002/trip002.module#Trip002Module',
    
  },
  {
    path: 'trip003',
    
    loadChildren: 'app/pages/trip003/trip003.module#Trip003Module',
    
  },
  {
    path: 'trip004',
    
    loadChildren: 'app/pages/trip004/trip004.module#Trip004Module',
    
  },
  {
    path: 'trip005',
    
    loadChildren: 'app/pages/trip005/trip005.module#Trip005Module',
    
  },
  
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'pages/login' },
  
      
    
      
 
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path:'packages',loadChildren:'./packages/packages.module#PackagesModule'},
      { path: 'glimpses' , loadChildren:'./glimpses/glimpses.module#GlimpsesModule'},
      { path: 'destinations' , loadChildren:'./destinations/destinations.module#DestinationsModule'},
      { path: 'accomandation' , loadChildren:'./accomandation/accomandation.module#AccomandationModule'},
      { path: 'festivalsnevent',loadChildren:'./festivalsnevents/festivalsnevents.module#FestivalsneventsModule'},
      { path: 'healthnwellness' , loadChildren:'./healthnwellness/healthnwellness.module#HealthnwellnessModule'},
      { path: 'aboutus' , loadChildren:'./aboutus/aboutus.module#AboutusModule'},
      {path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},


      
      
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
