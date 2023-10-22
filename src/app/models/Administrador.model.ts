export class Administrador{
  cedula: String;
  tipoDocumento: String;
  nombres: String;
  apellidos: String;
  sexo: String;
  fechaNacimiento: Date;
  telefono: String;
  ciudad: String;
  correo: String;
  password: String;

  constructor(
    cedula: String,
    tipoDocumento: String,
    nombres: String,
    apellidos: String,
    sexo: String,
    fechaNacimiento: Date,
    telefono: String,
    ciudad: String,
    correo: String,
    password: String
  ) {
    this.cedula = cedula; 
    this.tipoDocumento = tipoDocumento; 
    this.nombres = nombres; 
    this.apellidos = apellidos; 
    this.sexo = sexo; 
    this.fechaNacimiento = fechaNacimiento; 
    this.telefono = telefono; 
    this.ciudad = ciudad; 
    this.correo = correo; 
    this.password = password; 
  }
}
