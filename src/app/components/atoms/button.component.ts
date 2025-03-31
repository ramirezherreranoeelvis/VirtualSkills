import { Component, input, output } from '@angular/core';

@Component({
      selector: 'btn',
      imports: [],
      template: `
            <button
                  [type]="type()"
                  [disabled]="disabled()"
                  (click)="this.onClick.emit()"
                  [class]="
                        outline() +
                        ' ' +
                        background() +
                        (disabled() ? ' disable' : '')
                  "
            >
                  @if (img()) {
                  <img [src]="img()" [alt]="text()" [class]="classImage()" />
                  }
                  {{ text() }}
            </button>
      `,
      styles: [
            `
                  button {
                        @apply w-full h-full cursor-pointer transition-all duration-300 ease-in-out rounded-md;
                        @apply flex items-center justify-center gap-2;
                        @apply outline outline-offset-0 border-none outline-1;
                  }
                  .disable {
                        @apply opacity-50 cursor-not-allowed;
                        @apply outline-none;
                  }
            `,
      ],
})
export class ButtonComponent {
      public text = input<string>('button');
      public type = input<string>('button');
      public disabled = input<boolean>(false);
      public background = input<string>('bg-transparent');
      public outline = input<string>('outline-transparent');
      public img = input<string>('');
      public classImage = input<string>('h-5 w-6');

      public onClick = output<void>();
}
