import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { HomeComponent } from './home/home.component';
import { Packages} from './packages/packages.component';
import { Glimpses} from './glimpses/glimpses.component';
import { Destinations } from './destinations/destinations.component';
import { Accomandation } from './accomandation/accomandation.component';
import { Festivalsnevents } from './festivalsnevents/festivalsnevents.component';
import { FestivalsComponent } from './festivalsnevents/components/festivals/festivals.component';
import { EventsComponent } from './festivalsnevents/components/events/events.component';
import { Healthnwellness } from './healthnwellness/healthnwellness.component';
import { AyurvedaComponent } from './healthnwellness/components/ayurveda/ayurveda.component';
import { YogaComponent } from './healthnwellness/components/yoga/yoga.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Trip008Component } from './trip008/trip008.component';
import { Trip007Component } from './trip007/trip007.component';
import { Trip006Component } from './trip006/trip006.component';
import { Trip009Component } from './trip009/trip009.component';
import { Trip010Component } from './trip010/trip010.component';
import { Trip011Component } from './trip011/trip011.component';
import { Trip012Component } from './trip012/trip012.component';



@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages, Trip008Component, Trip007Component, Trip006Component, Trip009Component, Trip010Component, Trip011Component, Trip012Component]
})
export class PagesModule {
}
