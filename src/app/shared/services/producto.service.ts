// Components
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { ProductoModel } from './../models/producto.model';

// Services
import { BaseService } from './_base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends BaseService<ProductoModel>
{

  constructor(protected _http: HttpClient)
  {
    super(_http);
  }
}
