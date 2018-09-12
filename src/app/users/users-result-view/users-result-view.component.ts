import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-users-result-view',
  templateUrl: './users-result-view.component.html',
  styleUrls: ['./users-result-view.component.css']
})
export class UsersResultViewComponent implements OnInit {

  user: any;
  constructor(
    private bsModelRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  onClickClose() {
    this.bsModelRef.hide();
  }

}
