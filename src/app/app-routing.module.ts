import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './pages/about/aboutpage/aboutpage.component';
import { HomePageComponent } from './pages/homepage/home-page/home-page.component';
import { ServicespageComponent } from './pages/ourServicesSection/servicespage/servicespage.component';
import { ContactUsComponent } from './Blogging/contact_us/contact-us/contact-us.component';
import { ContactUsPageComponent } from './pages/contact_us_page/contact-us-page/contact-us-page.component';
import { LmsPageComponent } from './pages/lms/lms-page/lms-page.component';
import { GalleryPageComponent } from './pages/gallery_page/gallery-page/gallery-page.component';
import { SecurityPageComponent } from './pages/security-page/security-page/security-page.component';

const routes: Routes = [
  { path: 'AboutUs', component: AboutpageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'Services', component: ServicespageComponent },
  { path: 'ContactUs', component: ContactUsPageComponent },
  { path: 'Home/Lms', component: LmsPageComponent },
  { path: 'Gallery', component: GalleryPageComponent },
 
  { path: 'Home/Security', component:  SecurityPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
