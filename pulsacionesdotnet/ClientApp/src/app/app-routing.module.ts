import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './pulsacion/persona-consulta/persona-consulta.component';

import { Routes, RouterModule } from '@angular/router';
import { ContactenosComponent } from './formulario/contactenos/contactenos.component';

const routes: Routes = [
  {
  path: 'personaConsulta',
  component: PersonaConsultaComponent
  },
  {
  path: 'personaRegistro',
  component: PersonaRegistroComponent
  },
  {
    path: 'formContactenos',
    component: ContactenosComponent
    }
  ];
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})

export class AppRoutingModule { }
