import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/shared/citas.service';
import { Empresa } from 'src/app/shared/empresa.model';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styles: [
  ]
})
export class EmpresaFormComponent implements OnInit {
  constructor(public service : CitasService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(formEmp: NgForm){
    this.service.agregarEmpresa().subscribe(
      res => {
        this.limpiarDatos(formEmp);
        this.service.actualizarTodosLosDatos();
        this.regresaMenuAgregar();
        this.toastr.success('Se agrego la empresa con éxito!','Control De Citas');
      },
      err => {
        this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
      }
    );
  }

  limpiarDatos(formEmp: NgForm){
    formEmp.form.reset();
    this.service.formEmpresas = new Empresa();
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
