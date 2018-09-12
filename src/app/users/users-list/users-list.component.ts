import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from 'src/app/users/users-services/users-data.service';
import { BsModalService } from 'ngx-bootstrap';
import { UsersNewComponent } from '../users-new/users-new.component';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { UsersViewComponent } from '../users-view/users-view.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  data: any;
  pages: number;
  page: number;
  pageNumber: number;
  total: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersDataService: UsersDataService,
    private bsModalService: BsModalService
  ) {
    console.log(this.route.snapshot.params);
    this.pageNumber = this.route.snapshot.params ? this.route.snapshot.params.id : 1;
  }

  ngOnInit() {
    this.loadUsers();
  }

  onClickNew() {
    this.bsModalService.show(UsersNewComponent, { class: 'modal-xs modal-dialog-centered', animated: true });
  }

  onClickEdit(item: any) {
    const initialState = {
      userId: item.id
    };
    this.bsModalService.show(UsersEditComponent, { class: 'modal-xs modal-dialog-centered', animated: true, initialState });
  }

  onClickView(item: any) {
    const initialState = {
      userId: item.id
    };
    this.bsModalService.show(UsersViewComponent, { class: 'modal-xs modal-dialog-centered', animated: true, initialState });
  }

  eventChangePage(pageNumber: number) {
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['../' + pageNumber]));
  }


  private loadUsers() {
    this.usersDataService.getPages(this.pageNumber ? this.pageNumber : 1)
      .subscribe((res) => {
        this.pages = res.total_pages;
        this.page = res.page;
        this.data = res.data;
        this.total = res.total;
      });
  }

}
