import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import places from '../../data/places.json';
import { placeService } from 'src/app/services/places.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bars-page',
  templateUrl: './bars-page.component.html',
  styleUrls: ['./bars-page.component.css']
})
export class BarsPageComponent implements OnInit {

  searchName: string;
  markDesc: boolean = false;
  priceDesc: boolean = false;

  bars = this.placeService.getBars();
  barsFiltered = this.bars;

  mark(mark: number) {
    if(mark-0.5 < Math.trunc(mark)) {
      return Math.trunc(mark);
    }
    else {
      return Math.trunc(mark) + 1;
    }
  }

  order() {
    if (this.markDesc) {
      this.barsFiltered = this.barsFiltered.sort((a,b) => (a.Mark - b.Mark));
    }
    else {
      this.barsFiltered = this.barsFiltered.sort((a,b) => (b.Mark - a.Mark));
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
      this.barsFiltered = this.barsFiltered.sort((a,b) => (a.price_level - b.price_level));
    }
    else {
      this.barsFiltered = this.barsFiltered.sort((a,b) => (b.price_level - a.price_level));
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

  searchFilter(searchName: string) {
    if(searchName != '') {
      this.barsFiltered = this.bars.filter(function(bar) {
        if((bar.Name.toLowerCase().includes(searchName.toLowerCase()))
        || (bar.Address_city.toLowerCase().includes(searchName.toLowerCase()))
        || (bar.Address_postcode.toString().includes(searchName.toString()))) {
          return bar;
        }
      })
    }
    else {
      this.barsFiltered = this.bars;
    } 
  }

  constructor(config: NgbRatingConfig, private placeService: placeService, private router: Router) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {

  }

}
