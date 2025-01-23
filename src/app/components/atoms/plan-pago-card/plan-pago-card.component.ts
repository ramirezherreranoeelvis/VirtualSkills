import { Component, Input } from '@angular/core';
import { PlanPago } from '../../../interface/PlanPago';

@Component({
  selector: 'plan-pago-card',
  standalone: true,
  imports: [],
  templateUrl: './plan-pago-card.component.html',
  styleUrl: './plan-pago-card.component.scss'
})
export class PlanPagoCardComponent {
  @Input() tier!:PlanPago;
}
