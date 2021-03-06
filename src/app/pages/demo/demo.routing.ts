import { RouterModule, Routes } from '@angular/router';

import { ArraySimpleComponent } from './array-simple/array-simple.component';
import { DemoComponent } from './demo.component';
import { ObservableSimpleComponent } from './observable-simple/observable-simple.component';
import { DownloadSimpleComponent } from './download-simple/download-simple.component';
import { DownloadAdvancedComponent } from './download-advanced/download-advanced.component';
import { ExtUrlSimpleComponent } from './exturl-simple/exturl-simple.component';
import { OutputEventsComponent } from './output-events/output-events.component';
import { ObservableAdvancedComponent } from './observable-advanced/observable-advanced.component';
import { AddImageArrayComponent } from './add-image-array/add-image-array.component';
import { AddImageObservableComponent } from './add-image-observable/add-image-observable.component';
import { DescriptionCustomComponent } from './description-custom/description-custom.component';
import { DescriptionFullCustomComponent } from './description-full-custom/description-full-custom.component';
import { ArrayImagePointerComponent } from './array-image-pointer/array-image-pointer.component';
import { ObservableImagePointerComponent } from './observable-image-pointer/observable-image-pointer.component';
import { CloseOusideComponent } from './close-outside/close-outside.component';
import { ButtonsConfigComponent } from './buttons-config/buttons-config.component';
import { KeyboardConfigComponent } from './keyboard-config/keyboard-config.component';
import { NoInfiniteSlidingComponent } from './no-infinite-sliding/no-infinite-sliding.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {path: '', component: ArraySimpleComponent},
      {path: 'array-simple', component: ArraySimpleComponent},
      {path: 'observable-simple', component: ObservableSimpleComponent},
      {path: 'download-simple', component: DownloadSimpleComponent},
      {path: 'download-advanced', component: DownloadAdvancedComponent},
      {path: 'exturl-simple', component: ExtUrlSimpleComponent},
      {path: 'output-events', component: OutputEventsComponent},
      {path: 'observable-advanced', component: ObservableAdvancedComponent},
      {path: 'add-image-array', component: AddImageArrayComponent},
      {path: 'add-image-observable', component: AddImageObservableComponent},
      {path: 'description-custom', component: DescriptionCustomComponent},
      {path: 'description-full-custom', component: DescriptionFullCustomComponent},
      {path: 'array-pointer', component: ArrayImagePointerComponent},
      {path: 'observable-pointer', component: ObservableImagePointerComponent},
      {path: 'close-outside', component: CloseOusideComponent},
      {path: 'buttons-config', component: ButtonsConfigComponent},
      {path: 'keyboard-config', component: KeyboardConfigComponent},
      {path: 'no-infinite-sliding', component: NoInfiniteSlidingComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
