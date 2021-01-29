// Components
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ProductoService } from 'src/app/shared/services/producto.service';

// Models
import { ProductoModel } from 'src/app/shared/models/producto.model';

@Component(
    {
        templateUrl: 'edit-producto.component.html'
    }
)
export class EditProductoComponent
{
    productoModel: ProductoModel;
    idProducto: number;

    constructor(
        private _productoService: ProductoService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    )
    {
        this.productoModel = new ProductoModel();
        this._activatedRoute.params.subscribe(response => this.idProducto = response.id);
    }

    ngOnInit()
    {
        this.getDetailProducto();
    }

    // Se obtiene el detalle del producto
    getDetailProducto()
    {
        this._productoService.findById('productos', this.idProducto)
        .subscribe(response => {
            this.productoModel = response;
        })
    }

    // Actualiza el producto
    updateProducto()
    {
        this._productoService.upadate(this.productoModel, 'productos', this.idProducto)
        .subscribe(response => {
            this._router.navigate([`./../list`]);
        });
    }
}