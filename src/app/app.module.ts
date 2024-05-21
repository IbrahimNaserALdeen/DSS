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
import { TopbarStartComponent } from './Blogging/topbar_start/topbar-start/topbar-start.component';
import { FeatuerFactsComponent } from './Blogging/featuer_facts/featuer-facts/featuer-facts.component';
import { AboutUsScreenComponent } from './Blogging/about_us_screen/about-us-screen/about-us-screen.component';
import { ServicesScreenComponent } from './Blogging/services_screen/services-screen/services-screen.component';
import { ContactUsScreenComponent } from './Blogging/contact_us_screen/contact-us-screen/contact-us-screen.component';
import { ContactUsPageComponent } from './pages/contact_us_page/contact-us-page/contact-us-page.component';
import { LmsPageComponent } from './pages/lms/lms-page/lms-page.component';
import { LmsComponent } from './Blogging/lms_screen/lms/lms.component';
import { OurServiceLmsComponent } from './Blogging/our_service_lms/our-service-lms/our-service-lms.component';
import { LmsOurProjectComponent } from './Blogging/lms_our_project/lms-our-project/lms-our-project.component';
import { WhyDssComponent } from './Blogging/why_dss/why-dss/why-dss.component';
import { LmsOfferComponent } from './Blogging/lms_offer/lms-offer/lms-offer.component';
import { FaqComponent } from './Blogging/faq/faq/faq.component';
import { FearureComponent } from './Blogging/featuer3/fearure/fearure.component';
import { ListComponent } from './Blogging/featuer4/list/list.component';
import { VisionComponent } from './Blogging/vision/vision/vision.component';
import { MissionComponent } from './Blogging/mission/mission/mission.component';
import { ContactUsforPageComponent } from './Blogging/contact_usforPage/contact-usfor-page/contact-usfor-page.component';
import { FormsModule } from '@angular/forms';
import { HomeBackToTopComponent } from './Blogging/home_back_to_top/home-back-to-top/home-back-to-top.component';
import { AboutUsBackToTopComponent } from './Blogging/about_us_back_to_top/about-us-back-to-top/about-us-back-to-top.component';
import { ContactBackComponent } from './Blogging/contact_us_back_to_top/contact-back/contact-back.component';
import { OurServicesBackToTopComponent } from './Blogging/our_services_back_to_top/our-services-back-to-top/our-services-back-to-top.component';
import { ContactWithUsComponent } from './Blogging/contact_with_us_in_number/contact-with-us/contact-with-us.component';
import { GraphicDesignComponent } from './Blogging/graphic_design/graphic-design/graphic-design.component';
import { GalleryPageComponent } from './pages/gallery_page/gallery-page/gallery-page.component';
import { SecurityPageComponent } from './pages/security-page/security-page/security-page.component';
import { SecurityScreenComponent } from './Blogging/security-screen/security-screen/security-screen.component';
import { SecuritySectionComponent } from './Blogging/security-section/security-section/security-section.component';
import { SecurityServiceComponent } from './Blogging/security-service/security-service/security-service.component';
import { GraphicDesignScreenComponent } from './Blogging/graphic-design-screen/graphic-design-screen/graphic-design-screen.component';

//import { TopbarStartComponent } from './Blogging/about_section/topbar-start/topbar-start.component';
// Import OwlModule

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
    TopbarStartComponent,
    FeatuerFactsComponent,
    AboutUsScreenComponent,
    ServicesScreenComponent,
    ContactUsScreenComponent,
    ContactUsPageComponent,
    LmsPageComponent,
    LmsComponent,
    OurServiceLmsComponent,
    LmsOurProjectComponent,
    WhyDssComponent,
    LmsOfferComponent,
    FaqComponent,
    FearureComponent,
    ListComponent,
    VisionComponent,
    MissionComponent,
    ContactUsforPageComponent,
    HomeBackToTopComponent,
    AboutUsBackToTopComponent,
    ContactBackComponent,
    OurServicesBackToTopComponent,
    ContactWithUsComponent,
    GraphicDesignComponent,
    GalleryPageComponent,
    SecurityPageComponent,
    SecurityScreenComponent,
    SecuritySectionComponent,
    SecurityServiceComponent,
    GraphicDesignScreenComponent,
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
    FormsModule,
    // OwlModule

    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
