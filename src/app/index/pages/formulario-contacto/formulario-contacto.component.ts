import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['../../../../styles.css'],
})
export class FormularioContactoComponent {

  name: string = '';
  message: string = '';

  submitForm() {
    const whatsappMessage = `Hola, soy ${this.name}. Mensaje: ${this.message}`;
    const whatsappNumber = '+56942896003'; // Reemplaza 'TUNUMERO' con el número de WhatsApp al que deseas enviar el mensaje

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappLink;
  }
}
