import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
        selector: 'btn',
        imports: [],
        template: `
        <button
                [type]="type"
                [disabled]="disabled"
                (click)="click()"
                [class]="'outline-none ' + classStyle"
        >
                @if (img) {
                        <img [src]=" img" [alt]="text" [class]="classImage" />
                }
                {{ text }}
        </button>
        `,
        styles: [`
                button {
                        @apply w-full h-full cursor-pointer transition-all duration-300 ease-in-out rounded-md;
                        @apply flex items-center justify-center gap-2;
                        @apply outline outline-offset-0 border-none outline-1;
                }
        `]
})
export class ButtonComponent {

        @Input() text: string = "button";
        @Input() set type(value: string) {
                const validTypes = ['button', 'submit', 'reset'];
                this._type = validTypes.includes(value) ? value : 'button';
        }
        @Input() disabled: boolean = false;
        @Input() classStyle: string = "";
        @Input() img: string = "";
        @Input() classImage: string = "h-5 w-6";
        @Output() onClick: EventEmitter<void> = new EventEmitter<void>();


        public click(): void {
                this.onClick.emit();
        }

        get type(): string {
                return this._type;
        }

        private _type: string = 'button';
}
