import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlacePageComponent } from './pages/add-place-page/add-place-page.component';
import { EditPlacePageComponent } from './pages/edit-place-page/edit-place-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { PlacePresentationPageComponent } from './pages/place-presentation-page/place-presentation-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PlacePreviewComponent } from './pages/homepage/place-preview/place-preview.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';
import { BarsPageComponent } from './pages/bars-page/bars-page.component';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { LandscapesPageComponent } from './pages/landscapes-page/landscapes-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { PlaceDescriptionComponent } from './pages/place-description/place-description.component';
import { placeService } from './services/places.service';
import { commentService } from './services/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPlacePageComponent,
    EditPlacePageComponent,
    HomepageComponent,
    NewUserPageComponent,
    PlacePresentationPageComponent,
    FooterComponent,
    HeaderComponent,
    PlacePreviewComponent,
    MyProfilePageComponent,
    RestaurantsPageComponent,
    BarsPageComponent,
    MuseumsPageComponent,
    LandscapesPageComponent,
    OthersPageComponent,
    PlaceDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxTwitterTimelineModule,
    NgbModule
  ],
  providers: [
    placeService, 
    commentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
