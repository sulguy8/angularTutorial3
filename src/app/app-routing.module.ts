import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/angular',
    pathMatch : 'full'
  },
  {
    path: 'angular',
    loadChildren: () => import('./page/angular/angular.module').then( m => m.AngularModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./page/javascript/javascript.module').then( m => m.JavascriptModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
