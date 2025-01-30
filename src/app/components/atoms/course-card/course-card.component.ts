import { Component, Input } from '@angular/core';
import { Course } from '../../../interface/course';

@Component({
        selector: 'course-card',
        imports: [],
        templateUrl: './course-card.component.html',
        styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
        @Input() course!: Course;
}
