import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent } from './accessories.component';
import { HeaderComponent } from './header/header.component';

import { BsDropdownModule, CollapseModule, ModalModule } from 'ngx-bootstrap';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { FormService } from './accessories-shared/form.service';
import { PaginationComponent } from 'src/app/accessories/pagination/pagination.component';

@NgModule({
    imports: [
        CommonModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        AccessoriesComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        ModalComponent,
        PaginationComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        ModalComponent,
        PaginationComponent
    ],
    providers: [
    ]
})
export class AccessoriesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AccessoriesModule
        };
    }
}
