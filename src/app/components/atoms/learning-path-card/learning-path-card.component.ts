import { Component, Input } from '@angular/core';
import { Path } from '../../../interface/path';

@Component({
        selector: 'learning-path-card',
        imports: [],
        templateUrl: './learning-path-card.component.html',
        styleUrl: './learning-path-card.component.scss'
})
export class LearningPathCardComponent {
        @Input() path!: Path;

}
