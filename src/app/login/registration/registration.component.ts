import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {CommonServiceService} from '../../common-service.service';
import {Person} from '../../classes/person';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registrationForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        Email: new FormControl('', [Validators.required, Validators.email]),
        passGroup: new FormGroup({
            Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [passwordMatchValidator()]),
        }, [passwordMatchValidator()]),
    });
    objPerson: Person;

    constructor(private commonService: CommonServiceService) {
    }

    ngOnInit() {
    }
    public get pGroup(): FormGroup {
        return this.registrationForm.get('passGroup') as FormGroup;
    }

    register() {
        const operson = new Person();
        operson.fistName = this.registrationForm.value.firstName;
        operson.lastName = this.registrationForm.value.lastName;
        operson.Email = this.registrationForm.value.Email;
        operson.Password = this.registrationForm.value.passGroup.Password;

        this.commonService.post(operson)
            .subscribe(data => this.objPerson = data);

        console.log(this.registrationForm.value);
    }


}

export function passwordMatchValidator(): ValidatorFn {

    return (control: FormGroup): { [key: string]: any } | null => {
        const abc = control.get('Password');
        console.log(abc);
        const def = control.get('confirmPassword');
        return abc && def && abc.value != def.value ? { 'notMatch' : true } : null;
    };
}
