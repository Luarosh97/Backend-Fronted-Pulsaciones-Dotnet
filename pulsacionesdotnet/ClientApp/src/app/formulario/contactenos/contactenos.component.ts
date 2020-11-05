import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaCorreo } from 'src/app/Contactenos/persona-correo';
import { ContactenoServiceService } from 'src/app/servicesCorreo/contacteno-service.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  personaCorreo: PersonaCorreo;
  formGroup: FormGroup;
  submitted = false;
  constructor(private contactenosService: ContactenoServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.personaCorreo= new PersonaCorreo;
  }
  buildForm() {
    this.personaCorreo = new PersonaCorreo();
    this.personaCorreo.email = '';
    this.personaCorreo.nombre = '';
    this.personaCorreo.asunto= '';
    this.personaCorreo.descripcion= '';
    this.formGroup = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      asunto: [this.personaCorreo.asunto, [Validators.required,Validators.minLength(4)]],
      nombre: [this.personaCorreo.nombre, [Validators.required,Validators.minLength(4)]],
      descripcion: [this.personaCorreo.descripcion, [Validators.required,Validators.minLength(4)]],
      email: [this.personaCorreo.email, [Validators.required,Validators.minLength(4)]]
      });
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
  add(){
      alert('Persona registrado con exito'+ JSON.stringify(this.personaCorreo));
     this.contactenosService.add(this.personaCorreo);
      }



}
