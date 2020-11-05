import { Persona } from './../pulsacion/models/persona';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersona'
})
export class FiltroPersonaPipe implements PipeTransform {

  transform(personas: Persona [], searchText: string ): any {
    // tslint:disable-next-line:curly
    if (searchText == null) return personas;
         return personas.filter(p => p.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
         || p.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
