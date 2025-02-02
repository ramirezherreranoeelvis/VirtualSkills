import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
        styles: `
        .input-field{
                @apply relative z-0;

                &::before {
                        content: attr(message);
                        @apply absolute bottom-1 right-2 -z-10 block text-sm;
                }
        }

        input{
                @apply outline-none outline-offset-0 border-none outline-1 outline-[#1e5097];
                @apply bg-[#283b55] pl-5 py-2.5 rounded-md w-full;
                &.incorrect {
                        @apply outline-[#971e42] bg-[#55282856];
                }

                &.correct {
                        @apply outline-[#28971e] bg-[#2d552856];
                }

                &:focus {
                        @apply outline-[#408af1];

                        &.incorrect {
                                @apply outline-[#e21b57];
                        }

                        &.correct {
                                @apply outline-[#1be24d];
                        }
                }
        }
        `,
        selector: 'input-field',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        template: `
        <div class="input-field" [attr.message]="message">
                <input
                        [type]="type"
                        [placeholder]="placeholder"
                        [formControl]="control"
                        [ngClass]="{
                                'incorrect' : incorrect,
                                'correct': correct,
                }">
        </div>
        `,
        styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
        @Input() type: string = "text";
        @Input() placeholder: string = "";
        @Input() message: string = "";
        @Input() control: FormControl = new FormControl('');
        @Input() incorrect: boolean | undefined = false;
        @Input() correct: boolean | undefined = false;

}