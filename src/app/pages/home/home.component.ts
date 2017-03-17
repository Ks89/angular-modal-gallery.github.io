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

import { Component } from '@angular/core';

import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';

console.log(webpack.IMAGE_PATH_PREFIX);


@Component({
  selector: 'mmw-home-page',
  styleUrls: ['home.scss'],
  templateUrl: 'home.html'
})
export class HomeComponent {

  imagesArray: Array<Image> = [
    new Image(
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/img1.jpg`,
      null, // no thumb
      null, // no description
      'http://www.google.com'
    ),
    new Image(
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/img2.png`, // example with a PNG image
      null, // no thumb
      'Description 2',
      null // url
    ),
    new Image(
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/img3.jpg`,
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/thumbs/img3.png`, // example with a PNG thumb image
      'Description 3',
      'http://www.google.com'
    ),
    new Image(
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/img4.jpg`,
      null, // no thumb
      'Description 4',
      'http://www.google.com'
    ),
    new Image(
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/img5.jpg`,
      `${webpack.IMAGE_PATH_PREFIX}/assets/images/gallery/thumbs/img5.jpg`,
      null, // no description
      null // url
    )
  ];

}
