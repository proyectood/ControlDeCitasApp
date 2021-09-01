import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/shared/citas.service';
import { DepartamentoResponsable } from 'src/app/shared/departamento-responsable.model';

@Component({
  selector: 'app-departamento-responsable-form',
  templateUrl: './departamento-responsable-form.component.html',
  styles: [
  ]
})
export class DepartamentoResponsableFormComponent implements OnInit {

  constructor(public service : CitasService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(formDep: NgForm){
    this.service.agregarDepartamentoResponsable().subscribe(
      res => {
        this.limpiarDatos(formDep);
        this.service.actualizarTodosLosDatos();
        this.regresaMenuAgregar();
        this.toastr.success('Se agrego el departamento con éxito!','Control De Citas');
      },
      err => {
        this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
      }
    );
  }

  limpiarDatos(formDep: NgForm){
    formDep.form.reset();
    this.service.formDepartamentosResponsables = new DepartamentoResponsable();
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
