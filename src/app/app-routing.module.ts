import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductosComponent } from './views/productos/list/list-productos.component';
import { CreateProductoComponent } from './views/productos/create/create-producto.component';
import { DetailProductoComponent } from './views/productos/detail/detail-producto.component';
import { EditProductoComponent } from './views/productos/edit/edit-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListProductosComponent
  },
  {
    path: 'create',
    component: CreateProductoComponent
  },
  {
    path: 'detail/:id',
    component: DetailProductoComponent
  },
  {
    path: 'edit/:id',
    component: EditProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
