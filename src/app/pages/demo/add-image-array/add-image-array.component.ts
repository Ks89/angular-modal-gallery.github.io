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

import { Image } from 'angular-modal-gallery';

import * as _ from 'lodash';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'mmw-add-image-array-page',
  templateUrl: 'add-image-array.html',
  styleUrls: ['add-image-array.scss']
})
export class AddImageArrayComponent {

  imagesArray: Array<Image> = _.cloneDeep(IMAGES_ARRAY);

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeTypescript: string;

  private originalArrayLength: number = IMAGES_ARRAY.length;

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.emit('Demo - Add image array');

    this.codeTypescript =
      `  imagesArray: Observable<Array<Image>>; // init this value with your images
  
  private originalArrayLength: number = // init this value with the number of images
  
  addRandomImage() {
    this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.originalArrayLength)]);
  }`;

  }

  addRandomImage() {
    this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.originalArrayLength)]);
  }
}
