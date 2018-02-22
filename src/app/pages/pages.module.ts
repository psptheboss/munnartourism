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





@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
