import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "../models/Empleado.model";


@Injectable()
export class EmpleadoService{

    url:string = "http://localhost:4000/almalu/"


    constructor(private http: HttpClient){}

    agregarEmpleado(empleado: Empleado): Observable<any>{
        return this.http.post(this.url+"empleado", empleado); 
    }

    getEmpleado():Observable<any>{
        return this.http.get(this.url+"empleado"); 
    }

    eliminarEmpleado(cedula: string):Observable<any>{
        return this.http.delete(this.url+"empleado/"+cedula); 
    }

    obtenerEmpleado(cedula:string): Observable<any>{
        return this.http.get(this.url+"empleado/"+cedula); 
    }

    modificarEmpleado(cedula: String, empleado: Empleado): Observable<any> {
        return this.http.put(this.url + "empleado/" + cedula, empleado);
      }
}