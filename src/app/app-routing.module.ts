import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './character/detail/detail.component';
import { ListComponent } from './character/list/list.component';



const routes: Routes = [
  { path: "", component:  ListComponent},
  { path: "detail/:id/:author", component:  DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
