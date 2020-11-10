import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MatTabsModule } from '@angular/material/tabs';
import { AboutMbComponent } from './about-mb/about-mb.component';
import { CelebReadersComponent } from './celeb-readers/celeb-readers.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ResourcesComponent } from './resources/resources.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import { BookComponent } from './book/book.component';
import { YouTubePlayerModule } from "@angular/youtube-player";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutMbComponent,
    CelebReadersComponent,
    ActivitiesComponent,
    ResourcesComponent,
    BookComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    YouTubePlayerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
