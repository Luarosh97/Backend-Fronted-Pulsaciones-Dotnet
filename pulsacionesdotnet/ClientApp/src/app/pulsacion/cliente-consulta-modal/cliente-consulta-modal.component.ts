import { Persona } from './../models/persona';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente-consulta-modal',
  templateUrl: './cliente-consulta-modal.component.html',
  styleUrls: ['./cliente-consulta-modal.component.css']
})
export class ClienteConsultaModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  actualizar(persona: Persona ) {
    this.activeModal.close(persona);
}

}
