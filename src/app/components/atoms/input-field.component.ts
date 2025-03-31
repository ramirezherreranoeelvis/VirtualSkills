import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
      selector: 'input-field',
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule],
      template: `
            <div class="input-field" [attr.message]="message()">
                  <input
                        [type]="type()"
                        [placeholder]="placeholder()"
                        [formControl]="control()"
                        [class]="outline() + ' ' + background()"
                        [ngClass]="{
                                ' incorrect' : touched && !valid(),
                                ' correct': touched && valid(),
                }"
                        (click)="touched = true"
                  />
            </div>
      `,
      styles: `
        .input-field {
                @apply relative z-0;

                &::before {
                        content:attr(message);
                        @apply absolute bottom-1 right-2 -z-10 block text-sm;
                }
        }

        input {
                @apply w-full pl-5 py-2.5 rounded-md;
                @apply outline outline-offset-0 border-none outline-1 ;
        }

        .correct {
                @apply outline-[#28971e] bg-[#2d552856] focus:outline-[#1be24d];
        }

        .incorrect {
                @apply outline-[#971e42] bg-[#55282856] focus:outline-[#e21b57];
        }
        `,
})
export class InputFieldComponent {
      public type = input<string>('text');
      public placeholder = input<string>('');
      public message = input<string>('');
      public control = input<FormControl>(new FormControl(''));
      public valid = input<boolean | undefined>(false);
      public touched: boolean = false;
      public background = input<string>('bg-transparent');
      public outline = input<string>('outline-transparent');
}
