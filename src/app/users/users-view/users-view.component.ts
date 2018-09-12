import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UsersDataService } from 'src/app/users/users-services/users-data.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  userId: number;
  user: any;
  constructor(
    private bsModalRef: BsModalRef,
    private usersDataService: UsersDataService
  ) {
    //
  }

  ngOnInit() {
    if (this.userId) {
    this.loadUser();
    }
  }

  onClickClose() {
    this.bsModalRef.hide();
  }

  loadUser() {
    this.usersDataService.getById(this.userId)
      .subscribe((res) => {
        this.user = res;
      });
  }

}
