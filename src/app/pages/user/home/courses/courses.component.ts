import { Component } from '@angular/core';
import { CourseCardComponent } from '../../../../components/atoms/course-card/course-card.component';
import { Course } from '../../../../interface/course';
import { TextShadowComponent } from '../../../../components/atoms/text-shadow/text-shadow.component';
import { Path } from '../../../../interface/path';
import { LearningPathCardComponent } from "../../../../components/atoms/learning-path-card/learning-path-card.component";

@Component({
        selector: 'app-courses',
        standalone: true,
        imports: [CourseCardComponent, TextShadowComponent, LearningPathCardComponent],
        templateUrl: './courses.component.html',
        styleUrl: './courses.component.scss'
})
export class CoursesComponent {
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
        rutas: Path[] = [
                {
                        image: 'https://picsum.photos/200/300',
                        name: 'Introducción a Backend',
                        description: 'Aprende a programar en el lado del servidor',
                        creationDate: '2021/08/01',
                        courses: 5,
                        time: '2h 30m'
                },
                {
                        image: 'https://picsum.photos/200/300',
                        name: 'Frontend con React',
                        description: 'Domina las bases de React para crear interfaces dinámicas.',
                        creationDate: '2021/08/01',
                        courses: 6,
                        time: '15h 30m'
                },
                {
                        image: 'https://picsum.photos/200/300',
                        name: 'Desarrollo de videojuegos',
                        description: 'Aprende a crear videojuegos desde cero.',
                        creationDate: '2021/08/01',
                        courses: 4,
                        time: '10h 30m'
                },
                {
                        image: 'https://picsum.photos/200/300',
                        name: 'Ciencia de Datos',
                        description: 'Analiza grandes volúmenes de datos con Python y Excel.',
                        creationDate: '2021/08/01',
                        courses: 8,
                        time: '20h 30m'
                }
        ];
}
