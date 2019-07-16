import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopComponent } from './app-top/app-top.component';

@NgModule({
    declarations: [AppTopComponent],
    exports: [
        AppTopComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TopModule { }
