import { Component } from '@angular/core';

@Component({
  selector: 'mmw-features-page',
  templateUrl: 'features.html',
  styleUrls: ['features.scss']
})
export class FeaturesComponent {

  title: string = 'Modal Gallery';

  onUpdateTitle(event: string) {
    this.title = event;
  }

}