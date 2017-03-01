import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mmw-gallery-observable-page',
  templateUrl: 'gallery-observable.html',
  styleUrls: ['gallery-observable.scss']
})
export class GalleryObservableComponent {

  constructor(private route: ActivatedRoute) {}

}