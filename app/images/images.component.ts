import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { rAPIService } from '../reddit.service';

@Component({
  selector: 'app-images',
  moduleId: module.id,
  
  templateUrl: './images.component.html'
})

export class ImagesComponent implements OnInit {
  items: any;
  nextId: any;
  previousId: any;

  constructor(
    private _imagesAPIService: rAPIService
  ) { }


  ngOnInit() {

    this._imagesAPIService.fetchStories()
      .subscribe(
        items => {
          this.items = items.data.children;
          this.nextId = items.data.after;
          this.previousId = items.data.before;
        },
        error => console.log('Error fetching'));
  }

  // Next images
  next(){

    this._imagesAPIService.fetchNext(this.nextId)
      .subscribe(
        items => {
          this.items = items.data.children;
          this.nextId = items.data.after;
          this.previousId = items.data.before;
        },
        error => console.log('Error fetching'));

  }

  // Previous images
  previous(){

    this._imagesAPIService.fetchPrevious(this.nextId)
      .subscribe(
        items => {
          this.items = items.data.children;
          this.nextId = items.data.after;
          this.previousId = items.data.before;
        },
        error => console.log('Error fetching'));

  }
}
