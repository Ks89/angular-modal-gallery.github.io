import { Component } from '@angular/core';

@Component({
  selector: 'mmw-demo-page',
  templateUrl: 'demo.html',
  styleUrls: ['demo.scss']
})
export class DemoComponent {

  title: string = 'Modal Gallery';

  onUpdateTitle(event: string) {
    this.title = event;
  }

}