import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorTailorModule } from '@ngneat/error-tailor';

// Services
import { ProductoService } from './shared/services/producto.service';
import { CommonModule } from '@angular/common';
import { ListProductosComponent } from './views/productos/list/list-productos.component';
import { CreateProductoComponent } from './views/productos/create/create-producto.component';
import { DetailProductoComponent } from './views/productos/detail/detail-producto.component';
import { EditProductoComponent } from './views/productos/edit/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductosComponent,
    CreateProductoComponent,
    DetailProductoComponent,
    EditProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers:
  [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
