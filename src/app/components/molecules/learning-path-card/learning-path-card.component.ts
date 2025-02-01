import { Component, Input } from '@angular/core';
import { Path } from '../../../interface/path';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
        selector: 'learning-path-card',
        imports: [ButtonComponent],
        templateUrl: './learning-path-card.component.html',
        styleUrl: './learning-path-card.component.scss'
})
export class LearningPathCardComponent {
        @Input() path!: Path;

}
