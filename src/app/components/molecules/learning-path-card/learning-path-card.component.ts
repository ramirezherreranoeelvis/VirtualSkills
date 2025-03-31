import { Component, input, Input } from '@angular/core';
import { Path } from '../../../interfaces/path';
import { ButtonComponent } from '../../atoms/button.component';

@Component({
      selector: 'learning-path-card',
      imports: [ButtonComponent],
      templateUrl: './learning-path-card.component.html',
      styleUrl: './learning-path-card.component.scss',
})
export class LearningPathCardComponent {
      path = input.required<Path>();
}
