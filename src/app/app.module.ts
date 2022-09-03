import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ShowcasePageComponent } from './pages/showcase-page/showcase-page.component';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';
import { ShowcaseComponentComponent } from './components/showcase-component/showcase-component.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactFormComponent } from './components/landing-page/contact-form/contact-form.component';
import {MatCardModule} from '@angular/material/card';
import { ProjectShowcaseComponent } from './components/about-me-component/project-showcase/project-showcase.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectMoreInfoComponent } from './components/about-me-component/project-showcase/project-more-info/project-more-info.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {MatDividerModule} from '@angular/material/divider';
import { BlogDetailsComponentComponent } from './components/blog-component/blog-details-component/blog-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ShowcasePageComponent,
    AboutMeComponentComponent,
    ShowcaseComponentComponent,
    BlogComponentComponent,
    BlogPageComponent,
    ContactFormComponent,
    ProjectShowcaseComponent,
    ProjectMoreInfoComponent,
    BlogDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
