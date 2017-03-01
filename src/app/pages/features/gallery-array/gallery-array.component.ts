import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mmw-gallery-array-page',
  templateUrl: 'gallery-array.html',
  styleUrls: ['gallery-array.scss']
})
export class GalleryArrayComponent {

  constructor(private route: ActivatedRoute) {}

}