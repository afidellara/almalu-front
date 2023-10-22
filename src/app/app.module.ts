import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { CiudadesService } from './services/CiudadesService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorService } from './services/AdministradorService.service';
import { EmpleadoService } from './services/EmpleadoService.service';
import { TablaComponent } from './components/tabla/tabla.component';
import { LoginService } from './services/LoginService.service';
import { EnviosComponent } from './components/envios/envios.component';
import { IniciarSesionEmpleadoGuard } from './guard/IniciarSesionEmpleadoGuard.guard';
import { ClienteService } from './services/ClienteService.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    NoticiasComponent,
    FormularioComponent,
    LoginComponent,
    TablaComponent,
    EnviosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [CiudadesService, AdministradorService, EmpleadoService, LoginService, IniciarSesionEmpleadoGuard, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
