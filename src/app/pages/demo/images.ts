import { Image } from 'angular-modal-gallery';

import { environment } from '../../../environments/environment';

const PATH = environment.imgPath;

export const IMAGES_ARRAY: Image[] = [
  new Image(
    `${PATH}/assets/images/gallery/img1.jpg`,
    null, // no thumb
    null, // no description
    'http://www.google.com'
  ),
  new Image(
    `${PATH}/assets/images/gallery/img2.png`, // example with a PNG image
    null, // no thumb
    'Description 2',
    null // url
  ),
  new Image(
    `${PATH}/assets/images/gallery/img3.jpg`,
    `${PATH}/assets/images/gallery/thumbs/img3.png`, // example with a PNG thumb image
    'Description 3',
    'http://www.google.com'
  ),
  new Image(
    `${PATH}/assets/images/gallery/img4.jpg`,
    null, // no thumb
    'Description 4',
    'http://www.google.com'
  ),
  new Image(
    `${PATH}/assets/images/gallery/img5.jpg`,
    `${PATH}/assets/images/gallery/thumbs/img5.jpg`,
    null, // no description
    null // url
  )
];
