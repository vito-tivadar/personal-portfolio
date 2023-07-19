import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerXyzComponent } from './components/container-xyz/container-xyz.component';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TitlesSidebarComponent } from './components/titles-sidebar/titles-sidebar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { TagBoxComponent } from './components/tag-box/tag-box.component';
import { VariableTitleComponent } from './components/variable-title/variable-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    ContainerXyzComponent,
    HamburgerIconComponent,
    CloseIconComponent,
    HamburgerMenuComponent,
    CarouselComponent,
    CarouselCardComponent,
    TitlesSidebarComponent,
    MainSectionComponent,
    TagBoxComponent,
    VariableTitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
