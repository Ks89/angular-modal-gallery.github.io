import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { routing } from './demo.routing';

import { FEATURES_COMPONENTS } from "./components";

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs @types/hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap @types/mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
// **************************************************************************

import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    ModalGalleryModule // no for root here
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class DemoModule {
}