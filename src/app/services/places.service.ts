import places from '../data/places.json';
import { Injectable, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class placeService { // place service that handles all the data concerning places

    constructor(private route: ActivatedRoute) {}

    private routeSub: Subscription;


    public placesList:{"Name": string, "Address_number": number, "Address_street": string,
    "Address_postcode": number, "Address_city": string, "Type": string, "Mark": number, "Description": string, 
    "price_level": number, "id": number}[] = places; // importing places from the places JSON File

    public getPlaces() {
        return this.placesList.sort((a,b) => (b.Mark - a.Mark)); // method that returns the places List
    }

    

    public getPlaceById(placesList, id: number) { // method that returns the place according to its ID
        return placesList.filter(function(place) {
            if (place.id === id) {
                return place;
            }
        });
        }
    public getRestaurants() { // returns only restaurants by filtering places List
        return this.placesList.filter( function(place) {
            if(place.Type == "Restaurant") {
                return place;
        }
        });
    }

    public getMuseums() { // returns only museums by filtering places List
        return this.placesList.filter( function(place) {
            if(place.Type == "Museum") {
                return place;
        }
        });
    }

    public getLandscapes() { // returns only landscapes by filtering places List
        return this.placesList.filter( function(place) {
            if(place.Type == "Landscape") {
                return place;
        }
        });
    }

    public getBars() { // returns only bars by filtering places List
        return this.placesList.filter( function(place) {
            if(place.Type == "Bar") {
                return place;
        }
        });
    }

    public getOthers() { // returns only other places by filtering places List
        return this.placesList.filter( function(place) {
            if(place.Type == "Other") {
                return place;
        }
        });
    }

}