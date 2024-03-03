import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'keyboardsList',
    loadComponent:() => import('./pages/keyboards-list/keyboards-list.component'),
  },
  {
    path:'mousesList',
    loadComponent:() => import('./pages/mouses-list/mouses-list.component'),
  }
  ,
  {
    path:'',
    redirectTo:'/keyboardsList',
    pathMatch:'full'
  }
];
