import { Component, input, Input } from '@angular/core';

@Component({
      selector: 'line-border',
      imports: [],
      template: `
            <div [class]="direction() + ' ' + position()">
                  <div class="background"></div>
                  <div class="brd"></div>
            </div>
      `,
      styleUrl: './line-border.component.scss',
})
export class LineBorderComponent {
      public direction = input<string>('');
      public position = input<string>('');
}
