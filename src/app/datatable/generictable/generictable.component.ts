import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-generictable',
  templateUrl: './generictable.component.html',
  styleUrls: ['./generictable.component.scss']
})
export class GenerictableComponent implements OnInit {

    @Input() controlTitle;
    @Input() arr: string[];
    @Input() columnTitle: string[] ;
    @Input() dlfn: any ;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    dataSource = new MatTableDataSource<any>();
    constructor() { }

    ngOnInit() {
        this.dataSource.data = this.arr;
        this.dataSource.paginator = this.paginator;
    }

}
