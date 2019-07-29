import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PersonLogin} from '../../classes/personLogin';
import {CommonServiceService} from '../../common-service.service';
import {Person} from '../../classes/person';
import {Router} from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

    loginForm = new FormGroup({
        Email: new FormControl(''),
        Password: new FormControl('')
    });
    personLogin: Person[];
  constructor(private commonService: CommonServiceService, public router: Router) { }

  ngOnInit() {
  }

    login() {
        const ologinPerson = new PersonLogin();
        ologinPerson.Email = this.loginForm.value.Email;
        ologinPerson.Password = this.loginForm.value.Password;
        this.commonService.getUserData(ologinPerson)
            .subscribe( data => {
                this.personLogin = data;
                console.log(this.personLogin);
                if (this.personLogin.length > 0) {
                    this.router.navigate(['dashboard']);
                }
            });
    }
}
