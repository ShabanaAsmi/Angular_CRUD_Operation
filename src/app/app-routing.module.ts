import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  
  
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'mainTablePage',
    component: TableComponent
  },{
    path: 'addTab',
    component: AddComponent
  } ,
  {
    path: '',
    component: TableComponent
  }
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , {
      useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
