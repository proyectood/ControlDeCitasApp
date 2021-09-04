import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Citas } from '../shared/citas.model';
import { CitasService } from '../shared/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [
  ]
})
export class CitasComponent implements OnInit {

  constructor(public service: CitasService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.actualizarTodosLosDatos();
    console.log(this.service.listaCitas)
    this.accionMenu(1);
  }

  editarRegistro(registroSeleccionado: Citas){
    this.service.formData = Object.assign({},registroSeleccionado);
    this.accionMenu(2,'editar');
  }

  eliminarRegistro(folio:number){
    if(confirm('Realmente desea eliminar el registro ' + folio + '?')){
      this.service.eliminarCita(folio).subscribe(
        res => {
          this.service.actualizarTodosLosDatos();
          this.toastr.success('Se elimino la cita con éxito!','Control De Citas');
        },
        err => {
          this.toastr.error('Ocurrio un error al intentar la accion, verifique si el dato es correcto o si ya existe el registro.','Control De Citas');
        }
      );
    }
  }

  accionMenu(accion:number,edicion: string = ''){
    if(accion == 1){
      document.getElementById('tblCitas')!.style.display = 'block';
      document.getElementById('formCitas')!.style.display = 'none';
      document.getElementById('formClientes')!.style.display = 'none';
      document.getElementById('formEmpresas')!.style.display = 'none';
      document.getElementById('formDepartamentos')!.style.display = 'none';
      document.getElementById('formTipos')!.style.display = 'none';
      document.getElementById('formEstatus')!.style.display = 'none';
      document.getElementById('formResponsables')!.style.display = 'none';
    }else{
      if(edicion !== 'editar'){
        this.service.limpiarFormularioCitas();
      }
      document.getElementById('tblCitas')!.style.display = 'none';
      document.getElementById('formCitas')!.style.display = 'block';
      document.getElementById('formClientes')!.style.display = 'none';
      document.getElementById('formEmpresas')!.style.display = 'none';
      document.getElementById('formDepartamentos')!.style.display = 'none';
      document.getElementById('formTipos')!.style.display = 'none';
      document.getElementById('formEstatus')!.style.display = 'none';
      document.getElementById('formResponsables')!.style.display = 'none';
      console.log('Formulario a editar', this.service.formData);
      this.service.fechaCita = this.service.formData.fechaParaLaCita.toString().substring(0, 10);
      this.service.formData.fechaParaLaCita = this.service.fechaCita;
    }
  }

}
