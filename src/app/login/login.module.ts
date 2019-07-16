import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SinginComponent } from './singin/singin.component';
import { RegistrationComponent } from './registration/registration.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TopModule} from '../top/top.module';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [SinginComponent, RegistrationComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FlexLayoutModule,
        TopModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule
    ]
})
export class LoginModule { }
