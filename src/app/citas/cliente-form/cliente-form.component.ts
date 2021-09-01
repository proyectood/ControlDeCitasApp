import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/shared/citas.service';
import { Clientes } from 'src/app/shared/clientes.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styles: [
  ]
})
export class ClienteFormComponent implements OnInit {
  
  constructor(public service : CitasService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(formCte: NgForm){
    this.service.agregarCliente().subscribe(
      res => {
        this.limpiarDatos(formCte);
        this.service.actualizarTodosLosDatos();
        this.regresaMenuAgregar();
        this.toastr.success('Se agrego el cliente con éxito!','Control De Citas');
      },
      err => {
        this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
      }
    );
  }

  limpiarDatos(formCte: NgForm){
    formCte.form.reset();
    this.service.formClientes = new Clientes();
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
