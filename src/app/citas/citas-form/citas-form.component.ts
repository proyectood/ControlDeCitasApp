import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Citas } from 'src/app/shared/citas.model';
import { CitasService } from 'src/app/shared/citas.service';

@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styles: [
  ]
})
export class CitasFormComponent implements OnInit {

  constructor(public service : CitasService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.obtenerClientes();
    this.service.obtenerEmpresas();
    this.service.obtenerDepartamentosResponsables();
    this.service.obtenerTiposDeCita();
    this.service.obtenerEstatusDeAtencion();
    this.service.obtenerResponsables();
  }

  revisar(){
    this.service.revisionFolio();
    let folio = this.service.folioRevision;
    return folio;
  }

  onSubmit(form: NgForm){
    let folioRevisado = this.revisar();
    if(folioRevisado == 0){
      this.guardarRegistroNuevo(form);
    }else{
      this.actualizarRegistro(form,folioRevisado);
    }
  }

  guardarRegistroNuevo(form: NgForm){
    const fechaSistema = new Date();
    let dia = fechaSistema.getDate().toString();
    if(dia.length < 2){ dia = '0' + dia; }
    let mes = (fechaSistema.getMonth() + 1).toString();
    if(mes.length < 2){ mes = '0' + mes; }
    let anio = fechaSistema.getFullYear().toString();;
    let fechaHoy = anio + '-' + mes + '-' + dia;
    this.service.formData.fechaDeSolicitud = fechaHoy;
    this.service.agregarCita().subscribe(
      res => {
        this.limpiarDatos(form);
        this.service.actualizarTodosLosDatos();
        this.toastr.success('Se agrego la cita con éxito!','Control De Citas');
        this.regresarListado();
      },
      err => {
        this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
      }
    );
  }

  actualizarRegistro(form: NgForm,folio: number){
    this.service.actualizarCita(folio).subscribe(
      res => {
        this.limpiarDatos(form);
        this.service.actualizarTodosLosDatos();
        this.toastr.info('Se actualizo la cita con éxito!','Control De Citas');
        this.regresarListado();
      },
      err => {
        this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
      }
    );
  }

  limpiarDatos(form: NgForm){
    form.form.reset();
    this.service.formData = new Citas();
  }

  verFormAgregar(formulario: number){
    document.getElementById('formClientes')!.style.display = 'none';
    document.getElementById('formEmpresas')!.style.display = 'none';
    document.getElementById('formDepartamentos')!.style.display = 'none';
    document.getElementById('formTipos')!.style.display = 'none';
    document.getElementById('formEstatus')!.style.display = 'none';
    document.getElementById('formResponsables')!.style.display = 'none';
    document.getElementById('tblCitas')!.style.display = 'none';
    document.getElementById('formCitas')!.style.display = 'none';
    switch (formulario) {
      case 1:
        document.getElementById('formClientes')!.style.display = 'block';
        break;
      case 2:
        document.getElementById('formEmpresas')!.style.display = 'block';
        break;
      case 3:
        document.getElementById('formDepartamentos')!.style.display = 'block';
        break;
      case 4:
        document.getElementById('formTipos')!.style.display = 'block';
        break;
      case 5:
        document.getElementById('formEstatus')!.style.display = 'block';
        break;
      case 6:
        document.getElementById('formResponsables')!.style.display = 'block';
        break;
    
      default:
        break;
    }
  }

  regresarListado(){
    document.getElementById('tblCitas')!.style.display = 'block';
    document.getElementById('formCitas')!.style.display = 'none';
    document.getElementById('formClientes')!.style.display = 'none';
    document.getElementById('formEmpresas')!.style.display = 'none';
    document.getElementById('formDepartamentos')!.style.display = 'none';
    document.getElementById('formTipos')!.style.display = 'none';
    document.getElementById('formEstatus')!.style.display = 'none';
    document.getElementById('formResponsables')!.style.display = 'none';      
  }

}
