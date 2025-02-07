import { Component, Input } from '@angular/core';

@Component({
        selector: 'line-border',
        imports: [],
        template: `
        <div [class]="direction +' '+ position">
                <div class="background"></div>
                <div class="brd"></div>
        </div>
        `,
        styleUrl: './line-border.component.scss'
})
export class LineBorderComponent {
        @Input() direction: string = "";
        @Input() position: string = "";
}
