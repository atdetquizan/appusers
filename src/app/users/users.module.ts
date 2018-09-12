import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AccessoriesModule } from '../accessories/accessories.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersDataService } from 'src/app/users/users-services/users-data.service';
import { UsersNewComponent } from './users-new/users-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesModule } from 'src/app/accessories/control-messages/control-messages.module';
import { BsDatepickerModule, AlertModule } from 'ngx-bootstrap';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersResultViewComponent } from 'src/app/users/users-result-view/users-result-view.component';

const USERS_PROVIDERS = [
  UsersDataService
];

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    AccessoriesModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ControlMessagesModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersNewComponent,
    UsersEditComponent,
    UsersViewComponent,
    UsersResultViewComponent
  ],
  exports: [],
  entryComponents: [
    UsersNewComponent,
    UsersEditComponent,
    UsersViewComponent,
    UsersResultViewComponent
  ],
  providers: [
    USERS_PROVIDERS
  ]
})
export class UsersModule { }
