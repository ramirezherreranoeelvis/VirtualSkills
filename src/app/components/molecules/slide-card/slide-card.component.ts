import { Component, Input } from '@angular/core';
import { Slide } from '../../../interface/slide';
import { ButtonComponent } from '../../atoms/button.component';

@Component({
        selector: 'slide-card',
        imports: [ButtonComponent],
        templateUrl: './slide-card.component.html',
        styleUrl: './slide-card.component.scss'
})
export class SlideCardComponent {
        @Input() slide!: Slide;
}
