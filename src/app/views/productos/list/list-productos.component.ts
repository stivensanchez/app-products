// Components
import { Component } from '@angular/core';

// Model
import { ProductoModel } from 'src/app/shared/models/producto.model';

// Services
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component(
    {
        selector: 'app-list-productos',
        templateUrl: 'list-productos.component.html'
    }
)
export class ListProductosComponent
{
    listProductosActivos: ProductoModel[];
    listProductosInactivos: ProductoModel[];
    idProducto: number;

    constructor(
        private _productoService: ProductoService
    )
    {
        this.listProductosActivos = [];
        this.listProductosInactivos = [];
    }

    ngOnInit()
    {
        this.getAll();
    }

    // Get All
    getAll()
    {
        this._productoService.getAll('productos')
        .subscribe(response => {
            // Productos activos e inactivos
            this.listProductosActivos = response.filter(item => item.estado == true);
            this.listProductosInactivos = response.filter(item => item.estado == false);
        });
    }

    // Eliminar el producto
    deleteProducto(id: number)
    {
        this._productoService.delete(id)
        .subscribe(response => {
            console.log(`Eliminado! => ${ response }`);
        })
    }
}