import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import places from '../../data/places.json';
import { placeService } from 'src/app/services/places.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {

  searchName: string;
  markDesc: boolean = false;
  priceDesc: boolean = false;

  order() {
    if (this.markDesc) {
      this.restaurantsFiltered = this.restaurantsFiltered.sort((a,b) => (a.Mark - b.Mark));
    }
    else {
      this.restaurantsFiltered = this.restaurantsFiltered.sort((a,b) => (b.Mark - a.Mark));
    }
  }

  orderMarkDesc() {
    if (this.markDesc === false) {
      this.markDesc = true;
      this.order();
    }
    else {
      this.markDesc = false;
      this.order();
    }
  }

  orderPricekDesc() {
    if (this.priceDesc === false) {
      this.priceDesc = true;
      this.order2();
    }
    else {
      this.priceDesc = false;
      this.order2();
    }
  }

  order2() {
    if (this.priceDesc) {
      this.restaurantsFiltered = this.restaurantsFiltered.sort((a,b) => (a.price_level - b.price_level));
    }
    else {
      this.restaurantsFiltered = this.restaurantsFiltered.sort((a,b) => (b.price_level - a.price_level));
    }
  }

  getPriceIcon(price_level: number) {
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

  addPlace() {
    if (localStorage.getItem("userName") === null) {
      this.router.navigate(['/register']);
    }
    else {
      this.router.navigate(['/addplace'])
    }
  }

  mark(mark: number) {
    if(mark-0.5 < Math.trunc(mark)) {
      return Math.trunc(mark);
    }
    else {
      return Math.trunc(mark) + 1;
    }
  }

  restaurants = this.placeService.getRestaurants();
  
  restaurantsFiltered = this.restaurants;

  searchFilter(searchName: string) {
    if(searchName != '') {
      this.restaurantsFiltered = this.restaurants.filter(function(restaurant) {
        if((restaurant.Name.toLowerCase().includes(searchName.toLowerCase()))
        || (restaurant.Address_city.toLowerCase().includes(searchName.toLowerCase()))
        || (restaurant.Address_postcode.toString().includes(searchName.toString()))) {
          return restaurant;
        }
      })
    }
    else {
      this.restaurantsFiltered = this.restaurants;
    } 
  }

  constructor(config: NgbRatingConfig, private placeService: placeService, private router: Router) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  }

}
