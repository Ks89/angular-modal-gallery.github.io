import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { routing } from './features.routing';

import {FEATURES_COMPONENTS} from "./components";
import { SharedModule } from "../../shared/shared.module";

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs @types/hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap @types/mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery';
// **************************************************************************

import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';


@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule,
    Ng2SimplePageScrollModule.forRoot(),
    ModalGalleryModule // no for root here
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class FeaturesModule {
}