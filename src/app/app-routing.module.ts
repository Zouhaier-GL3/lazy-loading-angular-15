import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import(`./login/login.module`).then(
      module => module.LoginModule
    )
  },
  {
    path: 'layouts',
    loadChildren: () => import(`./layouts/layouts.module`).then(
      module => module.LayoutsModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
