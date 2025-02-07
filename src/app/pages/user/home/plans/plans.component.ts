import { Component } from '@angular/core';
import { SectionPlansComponent } from '../../../../components/organisms/section-plans/section-plans.component';
import { MotionImgComponent } from '../../../../components/atoms/motion-img/motion-img.component';
import { assets } from '../../../../routes/routes-asstes';
@Component({
        selector: 'app-plans',
        imports: [
                SectionPlansComponent,
                MotionImgComponent
        ],
        templateUrl: './plans.component.html',
        styleUrl: './plans.component.scss'
})
export class PlansComponent {
        protected assets = assets
}
