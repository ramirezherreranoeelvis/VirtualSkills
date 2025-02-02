import { Component } from '@angular/core';
import { SectionPlansComponent } from '../../../../components/organisms/section-plans/section-plans.component';

@Component({
        selector: 'app-plans',
        imports: [
                SectionPlansComponent
        ],
        templateUrl: './plans.component.html',
        styleUrl: './plans.component.scss'
})
export class PlansComponent {
}
