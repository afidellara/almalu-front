import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/Cliente.model";


@Injectable()
export class ClienteService{

    url:string = "http://localhost:4000/almalu/"


    constructor(private http: HttpClient){}

    agregarCliente(cliente: Cliente): Observable<any>{
        return this.http.post(this.url+"cliente", cliente); 
    }

    getCliente():Observable<any>{
        return this.http.get(this.url+"cliente"); 
    }

    eliminarCliente(cedula: string):Observable<any>{
        return this.http.delete(this.url+"cliente/"+cedula); 
    }

    obtenerCliente(cedula:string): Observable<any>{
        return this.http.get(this.url+"cliente/"+cedula); 
    }

    modificarCliente(cedula: String, cliente: Cliente): Observable<any> {
        return this.http.put(this.url + "cliente/" + cedula, cliente);
      }
}