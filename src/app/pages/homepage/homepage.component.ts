import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import places from '../../data/places.json';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { AESEncryptDecryptService} from '../../services/encryption';
import { placeService } from 'src/app/services/places.service.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  searchName: string; //input vlaue of the search
  markDesc: boolean = false; 
  priceDesc: boolean = false;

  placesList = this.placeService.getPlaces();
  placesFiltered = this.placeService.getPlaces();

  orderMarkDesc() { // makes the boolean MarkDesc true is the user clicks on the checkbox
    if (this.markDesc === false) {
      this.markDesc = true;
      this.order();
    }
    else {
      this.markDesc = false;
      this.order();
    }
  }

  order() { // function that orders places by descendent mark if the boolean markDesc is true
    if (this.markDesc) {
      this.placesFiltered = this.placesList.sort((a,b) => (a.Mark - b.Mark));
    }
    else {
      this.placesFiltered = this.placesList.sort((a,b) => (b.Mark - a.Mark));
    }
  }

  orderPricekDesc() { // makes the boolean priceDesc true is the user clicks on the checkbox
    if (this.priceDesc === false) {
      this.priceDesc = true;
      this.order2();
    }
    else {
      this.priceDesc = false;
      this.order2();
    }
  }

  order2() { // function that orders places by descendent price if the boolean priceDesc is true
    if (this.priceDesc) {
      this.placesFiltered = this.placesList.sort((a,b) => (a.price_level - b.price_level));
    }
    else {
      this.placesFiltered = this.placesList.sort((a,b) => (b.price_level - a.price_level));
    }
  }

  addPlace() { // function  that redirects user to registration page if the user isn't connected, 
               // else redirect to add a place page
    if (localStorage.getItem("userName") === null) { // to check if the user is connected, we check if the location isn't empty
      this.router.navigate(['/register']);
    }
    else {
      this.router.navigate(['/addplace'])
    }
  }

  searchFilter(searchName: string) { // displays places only corresponding to the search input
    if(searchName != '') {
      this.placesFiltered = this.placesList.filter(function(place) {
        if((place.Name.toLowerCase().includes(searchName.toLowerCase()))
        || (place.Address_city.toLowerCase().includes(searchName.toLowerCase()))
        || (place.Address_postcode.toString().includes(searchName.toString()))
        ) {
          return place;
        }
      })
    }
    else {
      this.placesFiltered = this.placesList;
    } 
  }
  
  mark(mark: number) { // rounds mark to integers, for instance 3.8 will be round to 4 
    if(mark-0.5 < Math.trunc(mark)) {
      return Math.trunc(mark);
    }
    else {
      return Math.trunc(mark) + 1;
    }
  }

  getPriceIcon(price_level: number) { // converts pirce level to a price icon in order to show to the user as well as possible
                                      // the price range of the place
    if (price_level == 1) {
      return "€";
    }
    if (price_level == 2) {
      return "€€";
    }
    if (price_level == 3) {
      return "€€€";
    }
    if (price_level == 4) {
      return "€€€€";
    }
  }

  constructor(config: NgbRatingConfig, private router: Router, private EncryptDecryptService: AESEncryptDecryptService, 
              private placeService: placeService) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  }

}
