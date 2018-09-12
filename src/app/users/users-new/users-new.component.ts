import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/users/users-services/users-data.service';
import { FormService } from 'src/app/accessories/accessories-shared/form.service';
import { environment } from 'src/environments/environment.prod';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert';
import { UsersResultViewComponent } from '../users-result-view/users-result-view.component';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

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
    //
  }
  async onClickSave() {
    this.formService.markFormGroupTouched(this.formNewUsers);
    if (this.formNewUsers.valid) {
      this.usersDataService.insert(this.formNewUsers.value).subscribe((res) => {
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
