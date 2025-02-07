import { Component, Input } from '@angular/core';
import { Course } from '../../../interface/course';
import { CourseCardComponent } from '../../molecules/course-card/course-card.component';
import { TitleDescriptionComponent } from '../../molecules/title-description/title-description.component';
import { CommonModule } from '@angular/common';

@Component({
        selector: 'section-courses',
        imports: [
                CommonModule,
                CourseCardComponent,
                TitleDescriptionComponent
        ],
        templateUrl: './section-courses.component.html',
        styleUrl: './section-courses.component.scss'
})
export class SectionCoursesComponent {
        @Input() title: string = "courses";
        @Input() description: string = "";
        courses: Course[] = [
                {
                        id: 1,
                        title: 'Python para principiantes',
                        image: 'https://picsum.photos/200/300',
                        enrolled: 25,
                        price: 14.99,
                        rating: 4.8,
                        level: 'Principiante',
                        tags: ['Python', 'teens']
                },
                {
                        id: 2,
                        title: 'JavaScript interactivo',
                        image: 'https://picsum.photos/200/300',
                        enrolled: 18,
                        price: 19.99,
                        rating: 4.7,
                        level: 'Intermediate',
                        tags: ['JavaScript', 'web']
                },
                {
                        id: 3,
                        title: 'Desarrollo de videojuegos',
                        image: 'https://picsum.photos/200/300',
                        enrolled: 12,
                        price: 24.99,
                        rating: 4.9,
                        level: 'Avanzado',
                        tags: ['videojuegos', 'programación']
                },
                {
                        id: 4,
                        title: 'Introducción a C++',
                        image: 'https://picsum.photos/200/300',
                        enrolled: 20,
                        price: 16.99,
                        rating: 4.6,
                        level: 'Principiante',
                        tags: ['C++', 'teens']
                },
                {
                        id: 5,
                        title: 'Diseño de aplicaciones móviles',
                        image: 'https://picsum.photos/200/300',
                        enrolled: 15,
                        price: 29.99,
                        rating: 4.7,
                        level: 'Intermediate',
                        tags: ['Aplicaciones móviles', 'Android', 'iOS']
                }
        ];
}
