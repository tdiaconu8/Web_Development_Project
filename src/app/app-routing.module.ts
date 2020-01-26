import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddPlacePageComponent } from './pages/add-place-page/add-place-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { RestaurantsPageComponent } from './pages/restaurants-page/restaurants-page.component';
import { BarsPageComponent } from './pages/bars-page/bars-page.component';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { LandscapesPageComponent } from './pages/landscapes-page/landscapes-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { PlaceDescriptionComponent } from './pages/place-description/place-description.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'addplace', component: AddPlacePageComponent},
  {path: 'register', component: NewUserPageComponent},
  {path: 'restaurants', component: RestaurantsPageComponent},
  {path: 'bars', component: BarsPageComponent},
  {path: 'museums', component: MuseumsPageComponent},
  {path: 'landscapes', component: LandscapesPageComponent},
  {path: 'others', component: OthersPageComponent},
  {path: 'place/:id', component: PlaceDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
