import { Component, OnInit } from '@angular/core';
import { Persona } from './../models/persona';
import { PersonaService } from './../../services/persona.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Mensajes } from 'src/app/services/mensajes';




@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona: Persona;
  formGroup: FormGroup;
  submitted = false;
 
  

  // tslint:disable-next-line:max-line-length
  constructor( private personaService: PersonaService, private formBuilder: FormBuilder,private mensaje:Mensajes) { }


  ngOnInit(): void {
    this.buildForm();
    
  }
  private buildForm() {
    this.persona = new Persona();
    this.persona.identificacion = '';
    this.persona.nombre = '';
    this.persona.sexo = '';
    this.persona.edad = 0;
    this.persona.pulsacion = 0;

    this.formGroup = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      identificacion: [this.persona.identificacion, [Validators.required,Validators.minLength(7),Validators.maxLength(13),Validators.pattern('^[0-9]+$')]],
      nombre: [this.persona.nombre, [Validators.required,Validators.minLength(4)]],
      sexo: [this.persona.sexo, [Validators.required, this.validaSexo,Validators.minLength(1)]],
      edad: [this.persona.edad, [Validators.required, Validators.minLength(1)]]
    });
  }

  private validaSexo(control: AbstractControl) {
    const sexo = control.value;
    if (sexo.toLocaleUpperCase() !== 'M' && sexo.toLocaleUpperCase() !== 'F') {
      return {
        validSexo: true, messageSexo: 'Sexo no Valido' 	};
      }
      return null;
  }

  get control() {
    return this.formGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }
  add() {
    this.persona = this.formGroup.value;
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
        this.mensaje.Mostrar('¡Operación exitosa!');
        this.persona = p;
      }
    });
  }

}
