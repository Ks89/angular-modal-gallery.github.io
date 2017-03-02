import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { routing } from './features.routing';

import {FEATURES_COMPONENTS} from "./components";

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs @types/hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap @types/mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************


@NgModule({
  imports: [
    CommonModule,
    routing,
    ModalGalleryModule // no for root here
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class FeaturesModule {
}