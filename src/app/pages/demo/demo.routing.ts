import { Routes, RouterModule } from '@angular/router';

import { ArraySimpleComponent } from "./array-simple/array-simple.component";
import { DemoComponent } from "./demo.component";
import { ObservableSimpleComponent } from "./observable-simple/observable-simple.component";
import { DownloadSimpleComponent } from "./download-simple/download-simple.component";
import { DownloadAdvancedComponent } from "./download-advanced/download-advanced.component";

export const routes: Routes = [
  { path: '',
    component: DemoComponent,
    children: [
      { path: '',                     component: ArraySimpleComponent },
      { path: 'array-simple',         component: ArraySimpleComponent },
      { path: 'observable-simple',    component: ObservableSimpleComponent},
      { path: 'download-simple',      component: DownloadSimpleComponent},
      { path: 'download-advanced',    component: DownloadAdvancedComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);