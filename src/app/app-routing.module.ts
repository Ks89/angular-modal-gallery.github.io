import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/404/not-found404.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { MigrationComponent } from './pages/migration/migration.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gettingStarted', component: GettingStartedComponent},

  {
    path: 'features',
    loadChildren: './pages/features/features.module#FeaturesModule',
    data: {preload: true}
  },

  {
    path: 'demo',
    loadChildren: './pages/demo/demo.module#DemoModule',
    data: {preload: true}
  },

  {path: 'migration', component: MigrationComponent},

  {path: '**', component: NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: Boolean(history.pushState) === false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
