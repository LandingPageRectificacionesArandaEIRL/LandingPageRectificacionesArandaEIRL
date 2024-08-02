import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {MatDialog} from "@angular/material/dialog";
import {ServiceDialogComponent} from "../service-dialog/service-dialog.component";
import {AttentionClientComponent} from "../attention-client/attention-client.component";
import {WhatsappButtonComponent} from "../whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    AttentionClientComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(service: ServiceType): void {
    const services: { [key in ServiceType]: { title: string, content: string } } = {
      motores: {
        title: "Área de Motores",
        content: `<br>* Rectificación de monoblock<br><br>
                  * Encamisetado de monoblock<br><br>
                  * Instalado de precamisas<br><br>
                  * Bruñido de camisas<br><br>
                  * Barrenado de túnel de bancada<br><br>
                  * Rellenado de tapas de bancada<br><br>
                  * Cepillado de carpeta de monoblock<br><br>
                  * Lavado Químico de Motores, culatas y componentes Industriales<br><br>`
      },
      cigueñales: {
        title: "Área de Cigueñales",
        content: `<br>* Rectificado de ejes cigueñales Hasta 3.10 metros y 800 mm de volteo<br><br>
                  * Rectificado de puños de cigüeñal<br><br>
                  * Pulido de puños de cigüeñal<br><br>
                  * Alineado de cigüeñal<br><br>
                  * Inspección magnetoscópica de rajaduras<br><br>
                  * Refrendado de pestaña de cigüeñal<br><br>`
      },
      culatas: {
        title: "Área de Culatas",
        content: `<br>* Cambio de guías<br><br>
                  * Cambio de asientos de culata<br><br>
                  * Rectificado de asientos de culata<br><br>
                  * Cambio de precámaras<br><br>
                  * Cambio de inyectores<br><br>
                  * Fabricación y cambio de pases de agua<br><br>
                  * Asentado de válvula<br><br>
                  * Rectificado de válvula<br><br>
                  * Calibrado de válvula<br><br>
                  * Armado de culata<br><br>
                  * Prueba hidrostática de culatas<br><br>
                  * Cepillado de carpeta de culata<br><br>
                  * Rimado de guías de válvula<br><br>`
      },
      presentado: {
        title: "Área de Presentado",
        content: `<br>* Presentado de bancada y biela<br><br>
                  * Embocinado de biela<br><br>
                  * Cambio de metales de eje de levas<br><br>
                  * Rectificado de caja de biela<br><br>
                  * Alineado de bielas<br><br>
                  * Rimado de bocina de biela<br><br>
                  * Rellenado de separadores<br><br>`
      },
      torno: {
        title: "Área de Torno, Soldadura",
        content: `<br>Rellenado de pistas de reten de cigüeñal<br><br>
                  * Reconstrucción de puntas de cigüeñal<br><br>
                  * Rellenado de pistas de reten de eje de levas<br><br>
                  * Fabricación de asientos de culata<br><br>
                  * Embocinado de damper<br><br>
                  * Reconstrucción de partes y piezas<br><br>
                  * Rellenado de carpeta de culata<br><br>
                  * Soldadura de reconstrucción en general en sistema SMAW y TIG<br><br>
                  * Fabricación de piezas varias<br><br>`
      },
      maestranza: {
        title: "Área de Maestranza",
        content: `<br>* Cromado de puños de cigüeñal<br><br>
                  * Cromado de eje de levas<br><br>
                  * Lavado de motor, culata y accesorios<br><br>
                  * Demás servicios conexos y complementarios<br><br>`
      }
    };

    this.dialog.open(ServiceDialogComponent, {
      data: services[service],
      panelClass: 'custom-dialog-container' // Aplica la clase personalizada aquí
    });
  }
}

type ServiceType = 'motores' | 'cigueñales' | 'culatas' | 'presentado' | 'torno' | 'maestranza';
