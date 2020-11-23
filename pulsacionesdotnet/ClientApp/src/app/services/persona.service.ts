import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Persona } from './../pulsacion/models/persona';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  Consultar(formulario: string): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + 'api/Persona/' + formulario).pipe (
      tap(_ => this.handleErrorService.log('Datos enviados exitosamente')),
      catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona',null))
    );
  }

  Totalizar(formulario: string): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'api/Persona/' + formulario).pipe (
      tap(_ => this.handleErrorService.log('Datos enviados exitosamente')),
      catchError(this.handleErrorService.handleError<number>('Totalizar Ayudas',null))
    );
  }
  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Persona', persona)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Persona>('Registrar Persona', null))
      );
  }

  }
