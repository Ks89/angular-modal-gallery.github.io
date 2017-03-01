import { Routes, RouterModule } from '@angular/router';
import { ImageModalComponent } from './gallery-array/image-modal.component';
import { DownloadComponent } from './download/download.component';

import { FeaturesComponent } from "./features.component";
import { GalleryArrayComponent } from "./gallery-array/gallery-array.component";
import { GalleryObservableComponent } from "./gallery-observable/gallery-observable.component";
import { GalleryDescriptionComponent } from "./gallery-description/gallery-description.component";
import { ExternalUrlComponent } from "./external-url/external-url.component";

export const routes: Routes = [
  { path: '',
    component: FeaturesComponent,
    children: [
      { path: '',                       component: GalleryArrayComponent },
      { path: 'galleryArray',           component: GalleryArrayComponent },
      { path: 'galleryObservable',      component: GalleryObservableComponent },
      { path: 'galleryDescription',     component: GalleryDescriptionComponent },
      { path: 'download',               component: DownloadComponent },
      { path: 'externalUrl',            component: ExternalUrlComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);