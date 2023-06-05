import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./../home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'featurs',
        loadChildren: () => import(`./../featurs/featurs.module`).then(
          module => module.FeatursModule
        )
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
