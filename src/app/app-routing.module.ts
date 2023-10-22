import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EnviosComponent } from './components/envios/envios.component';
import { IniciarSesionEmpleadoGuard } from './guard/IniciarSesionEmpleadoGuard.guard';

const routes: Routes = [
  {path: '', component:NoticiasComponent},
  {path: 'admin', component:FormularioComponent},
  {path: 'empleado', component:FormularioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'empleados', component:TablaComponent},
  {path: 'envios', component:EnviosComponent, canActivate: [IniciarSesionEmpleadoGuard]},
  {path: 'cliente', component:FormularioComponent},
  {path: 'clientes', component:TablaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
