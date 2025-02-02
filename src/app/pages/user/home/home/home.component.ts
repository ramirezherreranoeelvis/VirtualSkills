import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../../../../components/slider/slider.component';
import { Slide } from '../../../../interface/slide';
import { SectionPlansComponent } from '../../../../components/organisms/section-plans/section-plans.component';

@Component({
        selector: 'app-home',
        imports: [
                CommonModule,
                SliderComponent,
                SectionPlansComponent
        ],
        templateUrl: './home.component.html',
        styleUrl: './home.component.scss'
})
export class HomeComponent {

        dataSalides: Slide[] = [
                {
                        title: 'Slide 1',
                        description: 'This is the first slide.',
                        image: '',
                        clase: 'none',
                        background: "#1e0441"
                },
                {
                        title: 'Slide 2',
                        description: 'This is the second slide.',
                        image: '',
                        clase: 'none',
                        background: "#FF5733"
                },
                {
                        title: 'Slide 3',
                        description: 'This is the third slide.',
                        image: '',
                        clase: 'none',
                        background: "#FF5733"
                }
        ];

}