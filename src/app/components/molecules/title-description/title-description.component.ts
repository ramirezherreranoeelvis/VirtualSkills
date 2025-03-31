import { Component, input, Input } from '@angular/core';
import { TextShadowComponent } from '../../atoms/text-shadow.component';

@Component({
      selector: 'title-description',
      imports: [TextShadowComponent],
      templateUrl: './title-description.component.html',
      styleUrl: './title-description.component.scss',
})
export class TitleDescriptionComponent {
      title = input<string>('');
      description = input<string>('');
}
