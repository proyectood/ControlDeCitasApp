import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(citas: any, buscarTxt: string,listaTiposDeCita:any,listaClientes:any,listaEmpresas:any,listaDepartamentosResponsables:any,listaResponsables:any,listaEstatusDeAtencion:any): any {

    if(buscarTxt == ''){
      return citas;
    }
    let resultadoDeBusqueda = [];
    for (let i = 0; i < citas.length; i++) {
      let cita = citas[i];
      let tipoInx = parseInt(cita.tipoDeCita_fk);
      let clienteInx = parseInt(cita.cliente_fk);
      let empresaInx = parseInt(cita.empresaCliente_fk);
      let depInx = parseInt(cita.departamentoResponsable_fk);
      let respInx = parseInt(cita.responsable_fk);
      let estatusInx = parseInt(cita.estatusDeLaAtencion_fk);
      if(cita.folio.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         cita.fechaDeSolicitud.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         cita.asuntoDeCita.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 ||
         cita.fechaParaLaCita.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 ||
         cita.comentarios.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 ||
         listaTiposDeCita[tipoInx-1].descripcion.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         listaClientes[clienteInx-1].nombre.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         listaEmpresas[empresaInx-1].nombre.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         listaDepartamentosResponsables[depInx-1].nombre.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         listaResponsables[respInx-1].nombre.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 || 
         listaEstatusDeAtencion[estatusInx-1].descripcion.toString().trim().toLowerCase().indexOf(buscarTxt.toString().trim().toLowerCase()) > -1 
      ){
        resultadoDeBusqueda.push(cita);
      }
    }
    return resultadoDeBusqueda;
  }

}
