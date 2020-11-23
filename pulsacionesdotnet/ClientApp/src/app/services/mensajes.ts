import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';

@Injectable({
    providedIn: 'root'
  })

export class Mensajes {
    constructor(private modalService: NgbModal) { }

    Mostrar( mensaje: string) {
        const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.message = mensaje;
      }
}
