// Components
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { ProductoModel } from 'src/app/shared/models/producto.model';

// Services
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component(
    {
        templateUrl: 'create-producto.component.html'
    }
)
export class CreateProductoComponent
{
    objectoProducto: ProductoModel;

    constructor(
        private _productoService: ProductoService,
        private _router: Router
    )
    {
        this.objectoProducto = new ProductoModel();
    }

    // Crea el producto
    createProducto()
    {
        this._productoService.create(this.objectoProducto)
        .subscribe(response => {
            this._router.navigate([`./../list`]);
        })
    }
}