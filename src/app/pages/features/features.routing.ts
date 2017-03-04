import { Routes, RouterModule } from '@angular/router';

import { GalleryArrayComponent } from "./modal-gallery/modal-gallery.component";
import { FeaturesComponent } from "./features.component";

export const routes: Routes = [
  { path: '',
    component: FeaturesComponent,
    children: [
      { path: '',                       component: GalleryArrayComponent },
      { path: 'modalGallery',           component: GalleryArrayComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);