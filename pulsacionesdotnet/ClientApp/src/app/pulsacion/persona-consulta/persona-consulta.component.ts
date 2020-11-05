import { Persona } from './../models/persona';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PersonaService } from './../../services/persona.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  
  
  personas: Persona[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<Persona>();

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.get().subscribe(result => { this.personas = result; });
  }

  seleccionar(persona: Persona) {
    this.seleccionado.emit(persona);
}
}
