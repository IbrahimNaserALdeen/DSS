import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Blogging/navbar/navbar/navbar.component';
import { FooterComponent } from './Blogging/footer/footer/footer.component';
import { AboutSectionComponent } from './Blogging/about_section/about-section/about-section.component';
import { ClientsSectionComponent } from './Blogging/clients_section/clients-section/clients-section.component';
import { ContactUsComponent } from './Blogging/contact_us/contact-us/contact-us.component';
import { HomeSectionComponent } from './Blogging/home_section/home-section/home-section.component';
import { OurServicesSectionComponent } from './Blogging/our_services_section/our-services-section/our-services-section.component';
import { ProjectsSectionComponent } from './Blogging/projects_section/projects-section/projects-section.component';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutpageComponent } from './pages/about/aboutpage/aboutpage.component';
import { HomePageComponent } from './pages/homepage/home-page/home-page.component';
import { ServicespageComponent } from './pages/ourServicesSection/servicespage/servicespage.component';
import { FeatureComponent } from './Blogging/feature/feature/feature.component';
import { TeamComponent } from './Blogging/team/team/team.component';
import { Fearuer2Component } from './Blogging/featuer2/fearuer2/fearuer2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutSectionComponent,
    ClientsSectionComponent,
    ContactUsComponent,
    HomeSectionComponent,
    OurServicesSectionComponent,
    ProjectsSectionComponent,
    AboutpageComponent,
    HomePageComponent,
    ServicespageComponent,
    FeatureComponent,
    TeamComponent,
    Fearuer2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
