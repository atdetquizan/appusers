import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() pages: number;
  @Input() page: number;
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

  onClickPage(pagenumber: number) {
    this.changePage.emit(pagenumber);
  }

  onClickBack() {
    const pagenumber = this.page > 1 ? this.page - 1 : this.page;
    this.changePage.emit(pagenumber);
  }

  onClickNext() {
    const pagenumber = this.page < this.pages ? this.page + 1 : this.page;
    this.changePage.emit(pagenumber);
  }

  arrayPages(pages: number): any[] {
    return Array(pages);
  }
}
