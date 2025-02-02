import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../components/atoms/button/button.component';
import { InputFieldComponent } from '../../../components/atoms/input-field/input-field.component';
@Component({
        selector: 'app-sign-in',
        standalone: true,
        imports: [
                CommonModule,
                ReactiveFormsModule,
                ButtonComponent,
                InputFieldComponent
        ],
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

        // Definición del formulario
        protected profile = new FormGroup({
                campo: new FormControl(''),
                email: new FormControl('', [Validators.required, Validators.email]),
                password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });

        // Método para manejar el envío del formulario
        protected SignIn() {
                if (this.profile.valid) {
                        const email = this.profile.get('email')?.value;
                        const password = this.profile.get('password')?.value;
                        console.log('Email:', email);
                        console.log('Password:', password);
                        alert(`Email: ${email}, Password: ${password}`);
                } else {
                        alert('El formulario no es válido. Por favor, revisa los campos.');
                }
        }

        protected castFormControl(abstractControl: AbstractControl | null): FormControl {
                return abstractControl as FormControl;
        }

}
