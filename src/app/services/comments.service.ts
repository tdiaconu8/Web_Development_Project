import { Injectable } from '@angular/core';
import comments from '../data/comments.json';
import { place } from '../models/place.model.js';

@Injectable({
    providedIn: 'root'
  })

export class commentService { // this service handle comments

    public commentsList:{"author": string, "mark": number, "place": string, "text": string, "time": string}[] = comments;

    public getComments() { // method that returns all the comments
        return this.commentsList.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    } 

    public getCommentsByPlace(placeName: string) { // method that returns only the comments corresponding to a place which name
                                                  // is placeName
        return this.commentsList.filter(function(comment) {
            if (comment.place == placeName) {
                return place;
            }
        }).sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()); // sort comments by Date
    }

}