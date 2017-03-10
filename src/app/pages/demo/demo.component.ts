import { Component } from '@angular/core';
import { TitleService } from "../../shared/services/title.service";

@Component({
  selector: 'mmw-demo-page',
  templateUrl: 'demo.html',
  styleUrls: ['demo.scss']
})
export class DemoComponent {

  title: string = 'Modal Gallery';

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.subscribe((val: string) => {
      this.onUpdateTitle(val);
    });
  }

  onUpdateTitle(event: string) {
    this.title = event;
  }

}