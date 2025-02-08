import { Component, Input } from '@angular/core';

@Component({
        selector: 'text-shadow',
        imports: [],
        template: `
        <p [class]="classStyles">
                <span class="text-shadow" [class]="classStyles">{{text}}</span>
                {{text}}
        </p>
        `,
        styles: `
        p {
                @apply relative inline-block uppercase font-black text-[#0b0b14];

                .text-shadow {
                        @apply absolute uppercase top-0 left-0 -z-[1] text-transparent blur;
                        -webkit-text-stroke: 4px transparent;
                        // background: linear-gradient(45deg, #6461ff, #ff47f0, #6461ff, #ff0077, #0400ff, #ff002b);
                        background: linear-gradient(45deg, #008cff, #3c39ff, #3c39ff, #3c39ff, #3c39ff, #008cff);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                }
        }
  `
})
export class TextShadowComponent {
        @Input() text!: string;
        @Input() classStyles!: string;
}
