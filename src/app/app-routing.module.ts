import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaComponent } from './Ventas/venta/venta.component';

const routes: Routes = [
  {
    path: 'venta',
    component: VentaComponent,
    data: { title: 'Product List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
