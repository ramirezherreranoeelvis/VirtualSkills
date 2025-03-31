import { Component, Input } from '@angular/core';
import { LearningPathCardComponent } from '../../molecules/learning-path-card/learning-path-card.component';
import { Path } from '../../../interfaces/path';
import { TitleDescriptionComponent } from '../../molecules/title-description/title-description.component';
import { CommonModule } from '@angular/common';

@Component({
        selector: 'section-paths',
        imports: [
                CommonModule,
                LearningPathCardComponent,
                TitleDescriptionComponent
        ],
        templateUrl: './section-paths.component.html',
        styleUrl: './section-paths.component.scss'
})
export class SectionPathsComponent {
        @Input() title: string = "paths";
        @Input() description: string = "";
        paths: Path[] = [
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
