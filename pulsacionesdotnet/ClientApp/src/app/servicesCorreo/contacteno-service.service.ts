import { PersonaCorreo } from 'src/app/Contactenos/persona-correo';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactenoServiceService {
   constructor() { }

  get(): PersonaCorreo[] {
    return JSON.parse(localStorage.getItem('datos'));
  }

  add(personaCorreo: PersonaCorreo) {
    let personasCorreos: PersonaCorreo[] = [];
    if (this.get() != null) {
      personasCorreos = this.get();
    }
    personasCorreos.push(personaCorreo);
    localStorage.setItem('datos', JSON.stringify(personasCorreos));
  }
}
