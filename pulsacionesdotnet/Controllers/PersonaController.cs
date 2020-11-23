using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ENTITY;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using pulsacionesdotnet.Models;
using DAL;
using pulsacionesdotnet.Interfaces;

namespace pulsacionesdotnet.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class PersonaController: ControllerBase
    {
      private readonly PersonaService _personaService;
         private readonly IEmailSender _emailSender;

        public PersonaController(PulsacionesContext context,IEmailSender emailSender)
        {
            
            _personaService = new PersonaService(context);
            _emailSender = emailSender;

        }
        

        // GET: api/Persona
       [HttpGet("{formulario}")]
        public object SeleccionarConsulta(string formulario)
        {
            if (formulario == "Consulta")
            {
                return GetAll();
            }
            else
            {
                return TotalizarMonto();
            }
        }

        private IEnumerable<PersonaViewModel> GetAll()
        {
            var personas = _personaService.ConsultarTodos().Select(p => new PersonaViewModel(p));
            return personas;
        }

        // GET: api/Persona/5
       
        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> Post(PersonaInputModel personaInput)
        {
            Persona persona = MapearPersona(personaInput);
            var response = _personaService.Guardar(persona);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }
        // DELETE: api/Persona/5
        [HttpDelete("{identificacion}")]
        public ActionResult<string> Delete(string identificacion)
        {
            string mensaje = _personaService.Eliminar(identificacion);
            return Ok(mensaje);
        }
        private Persona MapearPersona(PersonaInputModel personaInput)
        {
            var persona = new Persona
            {
                Identificacion = personaInput.Identificacion,
                Nombre = personaInput.Nombre,
                Edad = personaInput.Edad,
                Sexo = personaInput.Sexo
            };
            return persona;
        }
        // PUT: api/Persona/5
        [HttpPut("{identificacion}")]
        public ActionResult<string> Put(string identificacion, Persona personanueva)
        {   
            
            var personaantigua =_personaService.BuscarxIdentificacion(identificacion);
            if(personaantigua !=null){
                
                personaantigua.Nombre= personanueva.Nombre;
                personaantigua.Sexo= personanueva.Sexo;
                personaantigua.Edad= personanueva.Edad;
 
            }
            string mensaje=_personaService.Modificar(personanueva);
            return mensaje;
        }

       private decimal TotalizarMonto()
        {
            return _personaService.TotalizarPulsaciones();
        }

    }
}
