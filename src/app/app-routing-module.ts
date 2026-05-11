import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Busca } from './pages/busca/busca';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'busca',
    component: Busca,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
