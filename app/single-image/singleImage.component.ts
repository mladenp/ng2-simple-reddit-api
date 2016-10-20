import {
  Component,
  OnInit,
  trigger, style, transition, animate
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { rAPIService } from '../reddit.service';

@Component({
  selector: 'single-image',
  moduleId: module.id,
  templateUrl: './singleImage.component.html',
  styleUrls: ['./../app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition('* => void', [
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})

export class SingleImageComponent implements OnInit {
  items: any;
  nextId: any;
  previousId: any;
  active: boolean;
  pageNumber: number;

  constructor(
    private _imagesAPIService: rAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params=>{
      console.log(params);
    });

    this._imagesAPIService.fetchNext("bla")
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

    this.active = true;

    this._imagesAPIService.fetchNext(this.nextId)
      .subscribe(
        items => {
          this.active = false;
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
