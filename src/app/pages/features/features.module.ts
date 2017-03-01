import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { routing } from './features.routing';

import {FEATURES_COMPONENTS} from "./components";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    FEATURES_COMPONENTS
  ]
})
export class FeaturesModule {
}