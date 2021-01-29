import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export abstract class BaseService<TModel>
{
    apiRoot: string;

    constructor(protected _http: HttpClient)
    {
        this.apiRoot = 'http://localhost:3000';
    }

    findById(endPoint: string, id: number): Observable<TModel>
    {
        let fullEndPoint = `${this.apiRoot}/${endPoint}/${id}`;

        return this._http.get(fullEndPoint).pipe(
            map((response: TModel) => {
                return response;
            })
        );
    }

    getAll(endPoint: string): Observable<TModel[]>
    {
        let fullEndPoint = `${this.apiRoot}/${endPoint}`;

        return this._http.get(fullEndPoint).pipe(
            map((response: TModel[]) =>{
                return response;
            })
        );
    }

    create(object: TModel): Observable<TModel>
    {
        let fullEndPoint = `${this.apiRoot}/${'productos'}`;

        return this._http.post(fullEndPoint, object).pipe(
            map((response: TModel) => {
                return response;
            })
        );
    }

    upadate(object: TModel, endPoint: string, objectId: number): Observable<TModel>
    {
        let fullEndPoint = `${this.apiRoot}/${endPoint}/${objectId}`;

        return this._http.patch(fullEndPoint, object).pipe(
            map((response: TModel) => {
                return response;
            })
        );
    }

    delete(objectId: number): Observable<any>
    {
        let fullEndPoint = `${this.apiRoot}/productos/${objectId}`;

        return this._http.delete(fullEndPoint).pipe(
            map((response: any) => {
                return response;
            })
        )
    }
}