import { Injectable } from '@angular/core';
import { LoteoDTO } from '../interface/loteo.interface';

@Injectable({
  providedIn: 'root', // Esto hace que el servicio sea un singleton disponible en toda la aplicación
})
export class DatosService {
  cargarDatosPorVariable(variable: string): LoteoDTO[] {
    const datos: Record<string, LoteoDTO[]> = {
      'assets/json/el-bonito.json': [
        {
          nombre: 'El bonito',
          precio: '$6.800.000',
          distancia: '25 km de Parral',
          sector: 'camino talhuenes',
          rol: 'Propio',
          propiedades: 'Saneadas',
          transferencia: 'Lista para transferir',
          pendiente: 'Pendiente suave',
          divicion: 'Cuenta con estacas'
        }
      ],
      'assets/json/santa-teresa.json': [
        {
          nombre: 'Santa Teresa',
          precio: '$16.000.000',
          distancia: '7 km de Retiro',
          sector: 'Frente a tucapel',
          rol: 'Propio',
          propiedades: 'Saneadas',
          transferencia: 'Lista para transferir',
          pendiente: 'Sin pendiente',
          divicion: 'Cuenta con estacas'
        }
      ],
      'assets/json/talhuenes.json': [
        {
          nombre: 'Lomas de Machicura',
          precio: '$10.000.000',
          distancia: '23 km de Parral',
          sector: 'Entre remulcado y camelia',
          rol: 'Propio',
          propiedades: 'Saneadas',
          transferencia: 'Lista para transferir',
          pendiente: 'Sin pendiente',
          divicion: 'Cuenta con estacas'
        }
      ]
    };

    return datos[variable] || [];
  }
}