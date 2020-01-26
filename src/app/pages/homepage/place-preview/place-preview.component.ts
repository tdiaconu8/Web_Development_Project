import { Component, OnInit, Input, Output } from '@angular/core';
import places from '../../../data/places.json';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { place } from 'src/app/models/place.model.js';

@Component({
  selector: 'app-place-preview',
  templateUrl: './place-preview.component.html',
  styleUrls: ['./place-preview.component.css']
})
export class PlacePreviewComponent implements OnInit {

  @Input()
  searchName: string = '';
  search: string = this.searchName;

  public placesList:{"Name": string, "Address_number": number, "Address_street": string,
  "Address_postcode": number, "Address_city": string, "Type": string, "Mark": number, "Description": string}[] = places;
  
  mark(mark: number) {
    if(mark-0.5 < Math.trunc(mark)) {
      return Math.trunc(mark);
    }
    else {
      return Math.trunc(mark) + 1;
    }
  }
  
  placesFiltered;

  filter() {
    if(this.searchName != '') {
      console.log('hello');
    }
  }

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  
  }

}
