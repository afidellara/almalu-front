import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Administrador } from "../models/Administrador.model";


@Injectable()
export class AdministradorService{

    url:string = "http://localhost:4000/almalu/"


    constructor(private http: HttpClient){}

    agregarAdministrador(administrador: Administrador): Observable<any>{
        return this.http.post(this.url+"admin", administrador); 
    }

    getAdministrador():Observable<any>{
        return this.http.get(this.url+"admin"); 
    }
}