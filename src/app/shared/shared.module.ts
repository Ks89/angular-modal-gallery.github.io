import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SHARED_COMPONENTS } from './components/components';
import { Ng2PageScrollModule, PageScrollConfig } from 'ng2-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2PageScrollModule,
  ],
  exports: [
    SHARED_COMPONENTS
  ],
  declarations: [
    SHARED_COMPONENTS
  ],
  providers: [ ]
})

export class SharedModule {
  constructor() {
    PageScrollConfig.defaultScrollOffset = 56;
    PageScrollConfig.defaultDuration = 0;
    PageScrollConfig.defaultInterruptible = true;
  }
}
