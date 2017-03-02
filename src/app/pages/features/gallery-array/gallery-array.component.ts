import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Image, Action, ImageModalEvent, Description} from 'angular-modal-gallery';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'mmw-gallery-array-page',
  templateUrl: 'gallery-array.html',
  styleUrls: ['gallery-array.scss']
})
export class GalleryArrayComponent {

  imagesArray: Array<Image> = [
    new Image(
      '../../../../../assets/images/gallery/img1.jpg',
      null, // no thumb
      null, // no description
      'http://www.google.com'
    ),
    new Image(
      '../../../../../assets/images/gallery/img2.png', // example with a PNG image
      null, // no thumb
      'Description 2',
      null // url
    ),
    new Image(
      '../../../../../assets/images/gallery/img3.jpg',
      '../../../../../assets/images/gallery/thumbs/img3.png', // example with a PNG thumb image
      'Description 3',
      'http://www.google.com'
    ),
    new Image(
      '../../../../../assets/images/gallery/img4.jpg',
      null, // no thumb
      'Description 4',
      'http://www.google.com'
    ),
    new Image(
      '../../../../../assets/images/gallery/img5.jpg',
      '../../../../../assets/images/gallery/thumbs/img5.jpg',
      null, // no description
      null // url
    )
  ];

  constructor(private route: ActivatedRoute) {
  }


}