import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mmw-gallery-description-page',
  templateUrl: 'gallery-description.html',
  styleUrls: ['gallery-description.scss']
})
export class GalleryDescriptionComponent {

  constructor(private route: ActivatedRoute) {}

}