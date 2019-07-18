import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerictableComponent } from './generictable/generictable.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
    declarations: [GenerictableComponent],
    exports: [
        GenerictableComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        RouterModule,
        FlexModule,
        MatButtonModule
    ]
})
export class DatatableModule { }
