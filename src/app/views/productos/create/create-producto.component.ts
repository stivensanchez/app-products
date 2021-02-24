// Components
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { ProductoModel } from 'src/app/shared/models/producto.model';

// Services
import { ProductoService } from 'src/app/shared/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component(
    {
        templateUrl: 'create-producto.component.html'
    }
)
export class CreateProductoComponent
{
    objectoProducto: ProductoModel;
    
    // Formulario Reactivo
    formularioProducto: FormGroup;

    constructor(
        private _productoService: ProductoService,
        private _router: Router,
        private formBuilder: FormBuilder
    )
    {
        this.objectoProducto = new ProductoModel();
    }

    ngOnInit()
    {
        this.datosFormulario();
    }

    // Formulario
    datosFormulario()
    {
        return this.formularioProducto = this.formBuilder.group(
            {
                id: ['', 
                  [
                      Validators.pattern("^\\d[0-9]*$")
                  ]
                ],
                producto: ['', 
                  [
                    Validators.required,
                    Validators.pattern("^[a-zA-Z ]*$")
                  ]
                ],
                descripcion: ['', []],
                codigo: ['', [Validators.minLength(3)]],
                precio: ['', 
                  [
                    Validators.pattern("^[0-9]{1,3}(\\,[0-9]{3})$")
                  ]
                ],
                estado: [true, []]
            }
        )
    }

    // Crea el producto
    createProducto()
    {
        if(this.formularioProducto.valid)
        {
            this.objectoProducto = this.formularioProducto.value;

            this._productoService.create(this.objectoProducto)
            .subscribe(response => {
                this._router.navigate([`./../list`]);
            });
        }  
    }

}