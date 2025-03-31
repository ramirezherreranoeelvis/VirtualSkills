import { Component, input, Input } from '@angular/core';
import { Slide } from '../../../interfaces/slide';
import { ButtonComponent } from '../../atoms/button.component';

@Component({
      selector: 'slide-card',
      imports: [ButtonComponent],
      templateUrl: './slide-card.component.html',
      styleUrl: './slide-card.component.scss',
})
export class SlideCardComponent {
      slide = input.required<Slide>();
}
