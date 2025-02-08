import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
        selector: 'btn',
        imports: [],
        template: `
        <button
                [type]="type"
                [disabled]="disabled"
                (click)="this.onClick.emit()"
                [class]="outline + ' ' + background"
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
        @Input() type:string = "button";
        @Input() disabled: boolean = false;
        @Input() background: string = "bg-transparent";
        @Input() outline: string = "outline-transparent";
        @Input() img: string = "";
        @Input() classImage: string = "h-5 w-6";
        @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
