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

import { Component } from '@angular/core';
import { codemirrorHtml, codemirrorTs } from '../codemirror.config';

@Component({
  selector: 'mmw-migration-page',
  styleUrls: ['migration.scss'],
  templateUrl: 'migration.html'
})
export class MigrationComponent {

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string =
    `  <div *ngFor="let img of imagesArray; let i = index">
    <div class="float-left" *ngIf="i <= 2">
      <a class="more" *ngIf="i==2" (click)="openImageModal(img)">+{{imagesArray.length - 3}} more </a>
      <img *ngIf="img.thumb" class="list-img" src="{{img.thumb}}"
        (click)="openImageModal(img)" alt='{{img.description}}'/>
      <img *ngIf="!img.thumb" class="list-img" src="{{img.img}}"
        (click)="openImageModal(img)" alt='{{img.description}}'/>
    </div>
  </div>
  <div *ngIf="openModalWindow">
    <modal-gallery [modalImages]="imagesArray"
                   [imagePointer]="imagePointer"
                   (close)="onCloseImageModal($event)"></modal-gallery>
  </div>`;

  codeTypescript: string =
    `  imagesArray: Array<Image>; // init this value with your images
  openModalWindow: boolean = false;
  imagePointer: number = 0;
  
  openImageModal(image: Image) {
    this.imagePointer = this.imagesArray.indexOf(image);
    this.openModalWindow = true;
  }
  
  onCloseImageModal(event: ImageModalEvent) {
    this.openModalWindow = false;
  }`;
}
