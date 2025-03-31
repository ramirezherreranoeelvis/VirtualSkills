import { FormControl } from "@angular/forms";

export interface User {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        birthDate: string;
        password: string;
}
export interface UserForm {
        firstName: FormControl<string>;
        lastName: FormControl<string>;
        username: FormControl<string>;
        email: FormControl<string>;
        birthDate: FormControl<string>;
        password: FormControl<string>;
        confirmPassword: FormControl<string>;
}
