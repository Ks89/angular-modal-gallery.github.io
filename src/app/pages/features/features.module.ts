import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { routing } from './features.routing';

import { FEATURES_COMPONENTS } from "./components";
import { SharedModule } from "../../shared/shared.module";

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs @types/hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap @types/mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
// **************************************************************************

import { Ng2PageScrollModule, PageScrollConfig } from 'ng2-page-scroll';


@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    Ng2PageScrollModule,
    ModalGalleryModule // no for root here
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class FeaturesModule {
  constructor() {
    PageScrollConfig.defaultScrollOffset = 30;
    PageScrollConfig.defaultDuration = 200;
    PageScrollConfig.defaultInterruptible = false;
  }
}