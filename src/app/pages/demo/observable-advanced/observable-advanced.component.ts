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

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Image } from 'angular-modal-gallery';

import * as _ from 'lodash';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'mmw-observable-advanced-page',
  templateUrl: 'observable-advanced.html',
  styleUrls: ['observable-advanced.scss']
})
export class ObservableAdvancedComponent implements OnInit, OnDestroy {
  // observable of an array of images with a delay to simulate a network request
  imagesArraySubscribed: Array<Image>;

  configTs: any = codemirrorTs;

  codeTypescript: string;

  private subscription: Subscription;

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.emit('Demo - Observable advanced');

    this.codeTypescript =
      `  // IMAGES_ARRAY is an Array<Image> that you have to initialize with your images
  imagesArraySubscribed: Array<Image>;
  private subscription: Subscription;
  
  ngOnInit() {
    this.subscription = Observable.of(IMAGES_ARRAY).delay(500)
      .subscribe((val: Array<Image>) => {
        this.imagesArraySubscribed = val;
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }`;

  }

  ngOnInit() {
    this.subscription = Observable.of(_.cloneDeep(IMAGES_ARRAY)).delay(500)
      .subscribe((val: Array<Image>) => {
        this.imagesArraySubscribed = val;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
