import { Component, Input } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { ButtonComponent } from '../../atoms/button.component';

@Component({
        selector: 'course-card',
        standalone: true,
        imports: [ButtonComponent],
        templateUrl: './course-card.component.html',
        styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
        @Input() course!: Course;
}
