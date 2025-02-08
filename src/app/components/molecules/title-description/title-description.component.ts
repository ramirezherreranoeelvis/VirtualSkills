import { Component, Input } from '@angular/core';
import { TextShadowComponent } from '../../atoms/text-shadow.component';

@Component({
        selector: 'title-description',
        imports: [TextShadowComponent],
        templateUrl: './title-description.component.html',
        styleUrl: './title-description.component.scss'
})
export class TitleDescriptionComponent {
        @Input() title: string = ""
        @Input() description: string = ""
}
