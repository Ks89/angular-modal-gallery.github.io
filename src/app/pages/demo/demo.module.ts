import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // to support ngModel
import { routing } from './demo.routing';

import { FEATURES_COMPONENTS } from './components';
// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs @types/hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap @types/mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
import 'codemirror';
import { CodemirrorModule } from 'ng2-codemirror';

import { SharedModule } from '../../shared/shared.module';

// **************************************************************************

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    FormsModule,
    CodemirrorModule,
    ModalGalleryModule // no for root here
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class DemoModule {
}
