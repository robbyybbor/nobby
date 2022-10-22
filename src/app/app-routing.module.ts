import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'search-in-array',
    loadChildren: () => import('./search-in-array/search-in-array.module').then( m => m.SearchInArrayPageModule)
  },
  {
    path: 'asincrone',
    loadChildren: () => import('./asincrone/asincrone.module').then( m => m.AsincronePageModule)
  },
  {
    path: 'asincrone2',
    loadChildren: () => import('./asincrone2/asincrone2.module').then( m => m.Asincrone2PageModule)
  },
  {
    path: 'lista-pokemn',
    loadChildren: () => import('./lista-pokemn/lista-pokemn.module').then( m => m.ListaPokemnPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
