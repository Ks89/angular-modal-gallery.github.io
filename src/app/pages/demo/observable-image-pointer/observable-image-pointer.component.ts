/*
 * MIT License
 *
 * Copyright (c) 2017-2018 Stefano Cappa
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

import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Action, Image, ImageModalEvent } from 'angular-modal-gallery';

import * as _ from 'lodash';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'mmw-observable-image-pointer-page',
  templateUrl: 'observable-image-pointer.html',
  styleUrls: ['observable-image-pointer.scss']
})
export class ObservableImagePointerComponent implements OnDestroy {
  // observable of an array of images with a delay to simulate a network request
  images: Observable<Array<Image>> = Observable.of(_.cloneDeep(IMAGES_ARRAY)).delay(300);

  openModalWindowObservable: boolean = false;
  imagePointerObservable: number = 0;

  private subscription: Subscription;

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string =
    `<div *ngFor="let img of images | async; let i = index">
    <div class="float-left" *ngIf="i <= 2">
      <a class="more" *ngIf="i==2" (click)="openImageModalObservable(img)"> +{{(images | async)?.length - 3}}
        more </a>
      <img *ngIf="img.thumb" class="list-img" src="{{img.thumb}}" (click)="openImageModalObservable(img)" alt='{{img.description}}'/>
      <img *ngIf="!img.thumb" class="list-img" src="{{img.img}}" (click)="openImageModalObservable(img)" alt='{{img.description}}'/>
    </div>
  </div>
  <div *ngIf="openModalWindowObservable">
    <modal-gallery [modalImages]="images"
                   [imagePointer]="imagePointerObservable"
                   (close)="onCloseImageModal($event)"></modal-gallery>
  </div>`;
  codeTypescript: string =
    `
    images: Observable<Array<Image>>; // init this value with your images
    openModalWindowObservable: boolean = false;
    imagePointerObservable: number = 0;
 
    private subscription: Subscription;

    openImageModalObservable(image: Image) {
      this.subscription = this.images.subscribe((val: Image[]) => {
        this.imagePointerObservable = val.indexOf(image);
        this.openModalWindowObservable = true;
      });
    }

    onCloseImageModal(event: ImageModalEvent) {
      this.openModalWindowObservable = false;
    }

    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }`;

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.emit('Demo - Observable image pointer');
  }

  openImageModalObservable(image: Image) {
    this.subscription = this.images.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  // It's mandatory, because you have to manage `openModalWindowObservable` manually
  // So, you mast listen for the close event to set `openModalWindowObservable` to false
  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    this.openModalWindowObservable = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
