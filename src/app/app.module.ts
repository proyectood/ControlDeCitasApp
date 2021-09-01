import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitasComponent } from './citas/citas.component';
import { CitasFormComponent } from './citas/citas-form/citas-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteFormComponent } from './citas/cliente-form/cliente-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmpresaFormComponent } from './citas/empresa-form/empresa-form.component';
import { DepartamentoResponsableFormComponent } from './citas/departamento-responsable-form/departamento-responsable-form.component';
import { TipoCitaFormComponent } from './citas/tipo-cita-form/tipo-cita-form.component';
import { EstatusFormComponent } from './citas/estatus-form/estatus-form.component';
import { ResponsableFormComponent } from './citas/responsable-form/responsable-form.component';
import { FiltroPipe } from './shared/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    CitasFormComponent,
    ClienteFormComponent,
    EmpresaFormComponent,
    DepartamentoResponsableFormComponent,
    TipoCitaFormComponent,
    EstatusFormComponent,
    ResponsableFormComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
