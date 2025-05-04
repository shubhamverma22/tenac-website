import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { FactoryFeaturesComponent } from './shared/factory-features/factory-features.component';
import { IndustrialIotSolutionComponent } from './industrial-iot-solution/industrial-iot-solution.component';
import { PredictiveMaintenanceComponent } from './predictive-maintenance/predictive-maintenance.component';
import { VechileTrackingComponent } from './vechile-tracking/vechile-tracking.component';
import { AssetsTrackingStystemComponent } from './assets-tracking-stystem/assets-tracking-stystem.component';
import { SensorIntegrationComponent } from './sensor-integration/sensor-integration.component';
import { FuleMonitoringSystemComponent } from './fule-monitoring-system/fule-monitoring-system.component';
import { FleetManagementSolutionComponent } from './fleet-management-solution/fleet-management-solution.component';
import { PersonalSaftyFatigueComponent } from './personal-safty-fatigue/personal-safty-fatigue.component';
import { RuggedPcsComponent } from './rugged-pcs/rugged-pcs.component';
import { AssetsTrackingSolutionComponent } from './assets-tracking-solution/assets-tracking-solution.component';
import { FuleMonitorDetailComponent } from './fule-monitor-detail/fule-monitor-detail.component';
import { PredictiveMaintainanceSolutionComponent } from './predictive-maintainance-solution/predictive-maintainance-solution.component';
import { EducationComponent } from './education/education.component';
import { BoardroomSolutionComponent } from './boardroom-solution/boardroom-solution.component';
import { CampusItSolutionComponent } from './campus-it-solution/campus-it-solution.component';
import { DigitalClassroomComponent } from './digital-classroom/digital-classroom.component';
import { LearningManagementSystemComponent } from './learning-management-system/learning-management-system.component';
import { LibraryManagementSolutionComponent } from './library-management-solution/library-management-solution.component';
import { PaSystemComponent } from './pa-system/pa-system.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SoftwareSuppliesComponent } from './software-supplies/software-supplies.component';
import { IndustryWeServeComponent } from './industry-we-serve/industry-we-serve.component';
import { HardwareSuppliesComponent } from './hardware-supplies/hardware-supplies.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { HardwareServicesComponent } from './hardware-services/hardware-services.component';
import { AnnualMaintainanceCdComponent } from './annual-maintainance-cd/annual-maintainance-cd.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { DataBackupComponent } from './data-backup/data-backup.component';
import { DataMigrationServiceComponent } from './data-migration-service/data-migration-service.component';
import { DataCenterSupportComponent } from './data-center-support/data-center-support.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { ItFacultyManagementComponent } from './it-faculty-management/it-faculty-management.component';
import { ItRestorationComponent } from './it-restoration/it-restoration.component';
import { ManagedCloudServicesComponent } from './managed-cloud-services/managed-cloud-services.component';
import { ManagedPrintComponent } from './managed-print/managed-print.component';


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
    FleetManagementDetailComponent,
    FactoryFeaturesComponent,
    IndustrialIotSolutionComponent,
    PredictiveMaintenanceComponent,
    VechileTrackingComponent,
    AssetsTrackingStystemComponent,
    SensorIntegrationComponent,
    FuleMonitoringSystemComponent,
    FleetManagementSolutionComponent,
    PersonalSaftyFatigueComponent,
    RuggedPcsComponent,
    AssetsTrackingSolutionComponent,
    FuleMonitorDetailComponent,
    PredictiveMaintainanceSolutionComponent,
    EducationComponent,
    BoardroomSolutionComponent,
    CampusItSolutionComponent,
    DigitalClassroomComponent,
    LearningManagementSystemComponent,
    LibraryManagementSolutionComponent,
    PaSystemComponent,
    SoftwareSuppliesComponent,
    IndustryWeServeComponent,
    HardwareSuppliesComponent,
    OurPartnersComponent,
    HardwareServicesComponent,
    AnnualMaintainanceCdComponent,
    ContactFormComponent,
    DataAnalyticsComponent,
    DataBackupComponent,
    DataMigrationServiceComponent,
    DataCenterSupportComponent,
    ItConsultingComponent,
    ItFacultyManagementComponent,
    ItRestorationComponent,
    ManagedCloudServicesComponent,
    ManagedPrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
