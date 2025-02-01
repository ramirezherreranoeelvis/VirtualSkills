import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
        selector: 'input-field',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        template: `
        <div class="input-field" [ngClass]="{
                                 'before:content-[attr(message)]': message
                        }" [attr.message]="message">
                <input 
                        [type]="type" 
                        [placeholder]="placeholder"
                        formControlName="email"
                        [formControlName]="formContro"
                        [ngClass]="{
                                        'incorrect' : (!control?.invalid && control?.touched) && (control?.hasError('required') || control?.hasError('email')),
                                        'correct': (control?.valid && control?.touched) && (!control?.hasError('required') && !control?.hasError('email')),
                        }"
                        >
        </div>
        `,
        
})
export class InputFieldComponent {
        @Input() type: string = "text";
        @Input() placeholder: string = "";
        @Input() message: string = "";
        @Input() formContro: string = "";
        @Input() control: AbstractControl | null = null;
}
