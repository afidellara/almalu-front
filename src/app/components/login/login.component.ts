import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado.model';
import { LoginService } from 'src/app/services/LoginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent {

  correo = '';
  password = '';
    constructor(private loginService: LoginService, private route: Router){}

    iniciarSesion(){
      console.log(this.correo)
      console.log(this.password)
      this.loginService.login(this.correo, this.password).subscribe(
        (response) => {
          this.loginService.guardarInicioSesionEnCookie(response)
          this.route.navigate(['/envios'])
        }
      )
    }

    cerrarSesion(){
      this.loginService.cerrarSesion()
    }
}
