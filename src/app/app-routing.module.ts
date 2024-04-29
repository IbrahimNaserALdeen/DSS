import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './pages/about/aboutpage/aboutpage.component';
import { HomePageComponent } from './pages/homepage/home-page/home-page.component';
import { ServicespageComponent } from './pages/ourServicesSection/servicespage/servicespage.component';

const routes: Routes = [
  { path: 'Aboutus', component: AboutpageComponent },
  { path: 'home', component: HomePageComponent },

  { path: 'home/services', component: ServicespageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
