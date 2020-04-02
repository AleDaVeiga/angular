import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatosComponent } from './gatos/gatos.component';


const routes: Routes = [
  { path: '', component: GatosComponent },
  { path: 'categorias/:id', component: GatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
