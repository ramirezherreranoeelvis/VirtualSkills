import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
        selector: 'app-sign-in',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        templateUrl: './sign-in.component.html',
        styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

        protected profile = new FormGroup({
                email: new FormControl('', [Validators.required, Validators.email]),
                password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        })
        
        protected SignIn() {
                if (this.profile.valid) {
                        this.profile.get('email');
                        this.profile.get('password');
                        alert(this.profile.get('email')?.value)
                } else {
                        alert('Invalid form')
                }

        }
}
