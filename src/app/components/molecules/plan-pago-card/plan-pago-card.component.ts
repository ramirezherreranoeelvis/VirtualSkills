import { Component, Input } from '@angular/core';
import { PlanPago } from '../../../interface/PlanPago';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'plan-pago-card',
  imports: [ButtonComponent],
  templateUrl: './plan-pago-card.component.html',
  styleUrl: './plan-pago-card.component.scss'
})
export class PlanPagoCardComponent {
  @Input() tier!:PlanPago;
}
