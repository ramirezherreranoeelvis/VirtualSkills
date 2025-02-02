import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
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
                                'incorrect' : touched && !valid,
                                'correct': touched && valid,
                }"
                (click)="touched=true"
                >
        </div>
        `,
        styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
        @Input() type: string = "text";
        @Input() placeholder: string = "";
        @Input() message: string = "";
        @Input() control: FormControl = new FormControl('');
        @Input() valid: boolean | undefined = false;
        touched: boolean = false;

}