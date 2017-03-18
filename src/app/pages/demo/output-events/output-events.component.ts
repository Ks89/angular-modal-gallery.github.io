/*
 * MIT License
 *
 * Copyright (c) 2017 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {Component} from '@angular/core';

import {
  Image,
  Action,
  ImageModalEvent,
  Description
} from 'angular-modal-gallery';

import * as _ from 'lodash';

import {IMAGES_ARRAY} from '../images';
import { TitleService } from "../../../shared/services/title.service";

@Component({
  selector: 'mmw-output-events-page',
  templateUrl: 'output-events.html',
  styleUrls: ['output-events.scss']
})
export class OutputEventsComponent {
  imagesArray: Array<Image> = _.cloneDeep(IMAGES_ARRAY);

  imageLoaded: ImageModalEvent;
  visibleIndex: ImageModalEvent;
  isFirstImage: ImageModalEvent;
  isLastImage: ImageModalEvent;
  closeImageModal: ImageModalEvent;

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.emit('Demo - Output events');
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('(hasData)=onImageLoaded action: ' + Action[event.action]);
    console.log('(hasData)=onImageLoaded result:' + event.result);
    this.imageLoaded = event;
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('(show)=action: ' + Action[event.action]);
    console.log('(show)=result:' + event.result);
    this.visibleIndex = event;
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('(firstImage)=onfirst action: ' + Action[event.action]);
    console.log('(firstImage)=onfirst result:' + event.result);
    this.isFirstImage = event;
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('(lastImage)=onlast action: ' + Action[event.action]);
    console.log('(lastImage)=onlast result:' + event.result);
    this.isLastImage = event;
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('(close)=onClose action: ' + Action[event.action]);
    console.log('(close)=onClose result:' + event.result);
    this.closeImageModal = event;
  }

}