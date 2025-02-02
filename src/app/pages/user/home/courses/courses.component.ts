import { Component } from '@angular/core';
import { SectionCoursesComponent } from '../../../../components/organisms/section-courses/section-courses.component';
import { SectionPathsComponent } from '../../../../components/organisms/section-paths/section-paths.component';

@Component({
        selector: 'app-courses',
        standalone: true,
        imports: [SectionCoursesComponent, SectionPathsComponent],
        templateUrl: './courses.component.html',
        styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
