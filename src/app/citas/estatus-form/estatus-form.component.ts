import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/shared/citas.service';
import { EstatusDeLaAtencion } from 'src/app/shared/estatus-de-la-atencion.model';

@Component({
  selector: 'app-estatus-form',
  templateUrl: './estatus-form.component.html',
  styles: [
  ]
})
export class EstatusFormComponent implements OnInit {
  constructor(public service : CitasService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(formEstatus: NgForm){
    this.service.agregarEstatusDeAtencion().subscribe(
      res => {
        this.limpiarDatos(formEstatus);
        this.service.actualizarTodosLosDatos();
        this.regresaMenuAgregar();
        this.toastr.success('Se agrego el estatus con éxito!','Control De Citas');
      },
      err => {
        this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
      }
    );
  }

  limpiarDatos(formEstatus: NgForm){
    formEstatus.form.reset();
    this.service.formEstatusDeAtencion = new EstatusDeLaAtencion();
  }

  regresaMenuAgregar(){
    document.getElementById('tblCitas')!.style.display = 'none';
    document.getElementById('formCitas')!.style.display = 'block';
    document.getElementById('formClientes')!.style.display = 'none';
    document.getElementById('formEmpresas')!.style.display = 'none';
    document.getElementById('formDepartamentos')!.style.display = 'none';
    document.getElementById('formTipos')!.style.display = 'none';
    document.getElementById('formEstatus')!.style.display = 'none';
    document.getElementById('formResponsables')!.style.display = 'none';      
  }
}
