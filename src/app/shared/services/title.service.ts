import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  public titleEvent: EventEmitter<string> = new EventEmitter<string>();
}



