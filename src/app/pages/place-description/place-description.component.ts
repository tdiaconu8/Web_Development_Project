import { Component, OnInit, Input } from '@angular/core';
import { place } from 'src/app/models/place.model';
import { placeService } from 'src/app/services/places.service';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { commentService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.css']
})
export class PlaceDescriptionComponent implements OnInit {

  id: number;
  place: any;
  private sub: any;
  places = this.placeService.getPlaces();
  comments = this.commentService.getCommentsByPlace(this.place);
  
  mark(mark: number) {
    if(mark-0.5 < Math.trunc(mark)) {
      return Math.trunc(mark);
    }
    else {
      return Math.trunc(mark) + 1;
    }
  }

  constructor(config: NgbRatingConfig, private route: ActivatedRoute, private placeService: placeService,
              private commentService: commentService) {
    config.max = 5;
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.place = this.placeService.getPlaceById(this.places, this.id);
      this.comments = this.commentService.getCommentsByPlace(this.place[0].Name);
   }); 
   }

}
