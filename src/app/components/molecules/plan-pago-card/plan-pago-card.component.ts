import { Component, input, Input } from '@angular/core';
import { PlanPago } from '../../../interfaces/PlanPago';
import { ButtonComponent } from '../../atoms/button.component';
import { CommonModule } from '@angular/common';

@Component({
      selector: 'plan-pago-card',
      imports: [CommonModule, ButtonComponent],
      templateUrl: './plan-pago-card.component.html',
      styleUrl: './plan-pago-card.component.scss',
})
export class PlanPagoCardComponent {
      tier = input.required<PlanPago>();
}
