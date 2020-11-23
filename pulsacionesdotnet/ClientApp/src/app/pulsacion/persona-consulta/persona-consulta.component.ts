import { Persona } from './../models/persona';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PersonaService } from './../../services/persona.service';
import { CurrencyPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaRegistroComponent } from '../persona-registro/persona-registro.component';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  
  
  personas: Persona[];
  searchText: string;
  totalAyudas:string;

  @Output() seleccionado = new EventEmitter<Persona>();

  constructor(private personaService: PersonaService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.personas= [];
    }
  SepararPorComas(valor): any {
    while (/(\d+)(\d{3})/.test(valor.toString())) {
      valor = valor.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return valor;
  }

  Consultar(){
    this.personaService.Consultar("Consulta").subscribe(result => {
      this.personas = result;
      this.personas = this.personas;
    });
    this.personaService.Totalizar('TotalAyudas').subscribe(totalAyudas => {
      this.totalAyudas = +this.SepararPorComas(totalAyudas) + '.00';
    });
  }
  openModalManipulador()
  {
    this.modalService.open(PersonaRegistroComponent, { size: 'xl' });
  }
}
