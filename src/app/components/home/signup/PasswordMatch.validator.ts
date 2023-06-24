import { FormGroup, ValidationErrors } from "@angular/forms";

export function PasswordMatchValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup): ValidationErrors | null => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[matchingControlName];
        if (password === null || confirmPassword === null) {
            return null;
        }
        if (password.errors && !confirmPassword.errors?.['passwordMatchValidator']) {
            return null;
        }
        if (password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ passwordMatchValidator: true});
            return { passwordMatchValidator: true};
        } else {
            confirmPassword.setErrors(null)
            return null;
        }
    }
}