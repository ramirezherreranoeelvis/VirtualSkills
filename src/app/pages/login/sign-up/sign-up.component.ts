import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/atoms/button.component';
import { InputFieldComponent } from '../../../components/atoms/input-field.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserForm } from '../../../interface/user';
@Component({
        selector: 'app-sign-up',
        imports: [
                CommonModule,
                ReactiveFormsModule,
                ButtonComponent,
                InputFieldComponent
        ],
        templateUrl: './sign-up.component.html',
        styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
        // Definición del formulario
        protected profile = new FormGroup<UserForm>({
                firstName: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [
                                Validators.required,
                                Validators.minLength(3),
                                Validators.pattern(/^[a-zA-Z]+$/)
                        ]
                }),
                lastName: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [
                                Validators.required,
                                Validators.minLength(3),
                                Validators.pattern(/^[a-zA-Z]+$/)
                        ]
                }),
                username: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [
                                Validators.required,
                                Validators.minLength(4)
                        ]
                }),
                email: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [
                                Validators.required,
                                Validators.email
                        ]
                }),
                birthDate: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [
                                Validators.required
                        ]
                }),
                password: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [
                                Validators.required,
                                Validators.minLength(6)
                        ]
                }),
                confirmPassword: new FormControl<string>('', {
                        nonNullable: true,
                        validators: [Validators.required]
                })
        }, {
                validators: passwordMatchValidator()
        }
        );

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

        public getMessage(control: AbstractControl | null, require: string, invalid: string, correct: string): string {
                if (!control) {
                        return "";
                }
                if (control.hasError('required')) {
                        return require;
                }
                if (control.invalid) {
                        return invalid;
                }
                return correct;
        }
        public getValid(control: AbstractControl | null): boolean {
                if (control?.valid && !control?.hasError('required')) {
                        return true;
                }
                return false;
        }

}
function passwordMatchValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
                const password = control.get('password');
                const confirmPassword = control.get('confirmPassword');

                if (!password || !confirmPassword) {
                        return null; // Si no existen los controles, no se valida
                }

                // Comparar los valores de los campos
                if (password.value !== confirmPassword.value) {
                        return { passwordMismatch: true }; // Devuelve un error si no coinciden
                }

                return null; // Si coinciden, no hay error
        };
}