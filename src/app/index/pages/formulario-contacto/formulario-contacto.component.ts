import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['../../../../styles.css'],
})
export class FormularioContactoComponent {

  name: string = '';
  message: string = '';

  submitForm() {
    if (this.isValidForm()) {
      const whatsappMessage = `Hola, soy ${this.name}. Mensaje: ${this.message}`;
      const whatsappNumber = '+56942896003'; // Reemplaza 'TUNUMERO' con el número de WhatsApp al que deseas enviar el mensaje
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.location.href = whatsappLink;
    } else{
      Swal.fire("Error con el formato de texto");
    }
    
  }

  isValidForm(): boolean {
    const allowedCharacters = /^[a-zA-Z0-9ñÑ\s]+$/;
  
    if (!allowedCharacters.test(this.name) || !allowedCharacters.test(this.message)) {
      return false;
    }
    return true;
  }

}
