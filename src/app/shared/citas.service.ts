import { Injectable } from '@angular/core';
import { Citas } from './citas.model';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './clientes.model';
import { Empresa } from './empresa.model';
import { DepartamentoResponsable } from './departamento-responsable.model';
import { TipoDeCita } from './tipo-de-cita.model';
import { EstatusDeLaAtencion } from './estatus-de-la-atencion.model';
import { Responsable } from './responsable.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http:HttpClient) { }

  readonly BaseUrl='http://localhost:10083/';
  readonly citasApi = 'api/Citas/';
  readonly clientesApi = 'api/Clientes/';
  readonly empresasApi = 'api/Empresa/';
  readonly departamentosResponsablesApi = 'api/DepartamentoResponsable/';
  readonly tiposDeCitaApi = 'api/TipoDeCita/';
  readonly estatusDeAtencionApi = 'api/EstatusDeLaAtencion/';
  readonly responsablesApi = 'api/Responsable/';

  formData: Citas = new Citas();
  formClientes: Clientes = new Clientes();
  formEmpresas: Empresa = new Empresa();
  formDepartamentosResponsables: DepartamentoResponsable = new DepartamentoResponsable();
  formEstatusDeAtencion: EstatusDeLaAtencion = new EstatusDeLaAtencion();
  formResponsables: Responsable = new Responsable();
  formTiposDeCita: TipoDeCita = new TipoDeCita();
  folioRevision: number = 0;
  
  
  listaCitas: Citas[] = [];
  listaClientes: Clientes[] = [];
  listaEmpresas: Empresa[] = [];
  listaDepartamentosResponsables: DepartamentoResponsable[] = [];
  listaTiposDeCita: TipoDeCita[] = [];
  listaEstatusDeAtencion: EstatusDeLaAtencion[] = [];
  listaResponsables: Responsable[] = [];
  buscarTxt: string = "";

  obtenerCitas(){
    return this.http.get(this.BaseUrl+this.citasApi).toPromise().then(res => this.listaCitas = res as Citas[]);
  }
  agregarCita(){
    return this.http.post(this.BaseUrl+this.citasApi,this.formData);
  }
  actualizarCita(folio:number){
    return this.http.put(`${this.BaseUrl}${this.citasApi}${folio}`,this.formData);
  }
  eliminarCita(folio:number){
    return this.http.delete(`${this.BaseUrl}${this.citasApi}${folio}`);
  }

  obtenerClientes(){
    return this.http.get(this.BaseUrl+this.clientesApi).toPromise().then(res => this.listaClientes = res as Clientes[]);
  }
  agregarCliente(){
    return this.http.post(this.BaseUrl+this.clientesApi,this.formClientes);
  }

  obtenerEmpresas(){
    return this.http.get(this.BaseUrl+this.empresasApi).toPromise().then(res => this.listaEmpresas = res as Empresa[]);
  }
  agregarEmpresa(){
    return this.http.post(this.BaseUrl+this.empresasApi,this.formEmpresas);
  }

  obtenerDepartamentosResponsables(){
    return this.http.get(this.BaseUrl+this.departamentosResponsablesApi).toPromise().then(res => this.listaDepartamentosResponsables = res as Empresa[]);
  }
  agregarDepartamentoResponsable(){
    return this.http.post(this.BaseUrl+this.departamentosResponsablesApi,this.formDepartamentosResponsables);
  }

  obtenerTiposDeCita(){
    return this.http.get(this.BaseUrl+this.tiposDeCitaApi).toPromise().then(res => this.listaTiposDeCita = res as TipoDeCita[]);
  }
  agregarTipoDeCita(){
    return this.http.post(this.BaseUrl+this.tiposDeCitaApi,this.formTiposDeCita);
  }

  obtenerEstatusDeAtencion(){
    return this.http.get(this.BaseUrl+this.estatusDeAtencionApi).toPromise().then(res => this.listaEstatusDeAtencion = res as EstatusDeLaAtencion[]);
  }
  agregarEstatusDeAtencion(){
    return this.http.post(this.BaseUrl+this.estatusDeAtencionApi,this.formEstatusDeAtencion);
  }

  obtenerResponsables(){
    return this.http.get(this.BaseUrl+this.responsablesApi).toPromise().then(res => this.listaResponsables = res as Responsable[]);
  }
  agregarResponsable(){
    return this.http.post(this.BaseUrl+this.responsablesApi,this.formResponsables);
  }

  actualizarTodosLosDatos(){
    this.obtenerCitas()
    this.obtenerClientes()
    this.obtenerEmpresas()
    this.obtenerDepartamentosResponsables()
    this.obtenerTiposDeCita()
    this.obtenerEstatusDeAtencion()
    this.obtenerResponsables()
  }

  revisionFolio(){
    this.folioRevision = this.formData.folio;
  }

}
