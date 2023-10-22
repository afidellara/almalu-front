import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CiudadesService{
    
    url:string = "http://localhost:4000/almalu/"

    constructor(private http: HttpClient) {} 
    
    getCiudades():Observable<any>{
        return this.http.get(this.url+"/ciudades"); 
    }
}