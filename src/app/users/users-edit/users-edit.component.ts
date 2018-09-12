import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/accessories/accessories-shared/form.service';
import { UsersDataService } from 'src/app/users/users-services/users-data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { environment } from 'src/environments/environment.prod';
import { UsersResultViewComponent } from 'src/app/users/users-result-view/users-result-view.component';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  userId: number;
  formNewUsers: FormGroup;
  constructor(
    public formService: FormService,
    private fb: FormBuilder,
    private usersDataService: UsersDataService,
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService
  ) {
    this.createFrm();
  }

  ngOnInit() {
    if (this.userId) {
      this.loadUser();
    }
  }

  onClickSave() {
    this.formService.markFormGroupTouched(this.formNewUsers);
    if (this.formNewUsers.valid) {
      this.usersDataService.update(this.userId, this.formNewUsers.value).subscribe((res) => {
        // OPCION 01 | MENSAJE DE CONFIRMACION CON "SWAL"
        // swal(environment.messages.success.title,
        //   environment.messages.success.message,
        //   environment.messages.success.type)
        //   .then(_ => {
        //     this.bsModalRef.hide();
        //   });
        // OPCION 01 | MOSTRAR EL RESULTADO
        this.bsModalRef.hide();
        const initialState = {
          user: res
        };
        this.bsModalService.show(UsersResultViewComponent, { class: 'modal-xs modal-dialog-centered', animated: true, initialState });
      });
    }
  }

  onClickClose() {
    this.bsModalRef.hide();
  }

  loadUser() {
    this.usersDataService.getById(this.userId)
      .subscribe((res) => {
        const values: any = {};
        values.nombre = res.data.first_name;
        values.apellidopat = res.data.last_name;
        this.formNewUsers.patchValue(values);
      });
  }

  private createFrm() {
    this.formNewUsers = this.fb.group({
      nombre: [null, [Validators.required]],
      apellidopat: [null, [Validators.required]],
      apellidomat: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      fechac: [null, [Validators.required]],
      fechingreso: [null, [Validators.required]]
    });
  }

}
