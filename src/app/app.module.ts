import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { OfferingComponent } from './offering/offering.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { HeroBanner2Component } from './hero-banner2/hero-banner2.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';
import { IntegratedServicesComponent } from './integrated-services/integrated-services.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { SmartFactoryComponent } from './smart-factory/smart-factory.component';
import { FaqComponent } from './faq/faq.component';
import { MiningComponent } from './mining/mining.component';
import { FleetManagementComponent } from './fleet-management/fleet-management.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { FleetManagementDetailComponent } from './fleet-management-detail/fleet-management-detail.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    HeroBannerComponent,
    OurServicesComponent,
    OurBlogComponent,
    TestimonialComponent,
    OfferingComponent,
    AboutUsComponent,
    HomeComponent,
    HeroBanner2Component,
    DigitalTransformationComponent,
    IntegratedServicesComponent,
    ManufacturingComponent,
    SmartFactoryComponent,
    FaqComponent,
    MiningComponent,
    FleetManagementComponent,
    LogisticsComponent,
    FleetManagementDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
