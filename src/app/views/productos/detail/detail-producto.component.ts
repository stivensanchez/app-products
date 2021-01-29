// Component
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ProductoService } from 'src/app/shared/services/producto.service';

// Models
import { ProductoModel } from 'src/app/shared/models/producto.model';

@Component(
    {
        templateUrl: 'detail-producto.component.html'
    }
)
export class DetailProductoComponent
{
    productoModel: ProductoModel;
    idProducto: number;

    constructor(
        private _productoService: ProductoService,
        private _activatedRoute: ActivatedRoute
    )
    {
        this.productoModel = new ProductoModel();
        this._activatedRoute.params.subscribe(response => this.idProducto = response.id);
    }

    ngOnInit()
    {
        this.getDetailsProducto();
    }

    // Detelle del producto
    getDetailsProducto()
    {
        this._productoService.findById('productos', this.idProducto)
        .subscribe(response => {
            this.productoModel = response;
        });
    }
}