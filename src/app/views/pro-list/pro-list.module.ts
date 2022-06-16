import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProListRoutingModule } from './pro-list-routing.module';
import { ProListComponent } from './pro-list.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { NewComponent } from './new/new.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldFile } from 'src/app/file-type.component';
import { FormlyFieldTabs } from 'src/app/tabs.component';
import { FormlyCheckboxField } from 'src/app/custom-checkbox.component';
import { RepeatTypeComponent } from 'src/app/repitition-section.component';
import { FormlyFieldCustomInput } from 'src/app/inline-text.component';
import { PanelWrapperComponent } from 'src/app/panel-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProListComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    ProListRoutingModule,
    DataTablesModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
      types: [
        {
          name: 'custom',
          component: FormlyFieldCustomInput,
          wrappers: ['form-field'],
        },
        { name: 'repeat', component: RepeatTypeComponent },
        {
          name:'cus-checkbox',component: FormlyCheckboxField
          ,
          // wrappers: ['form-field']
        },
        { name: 'tabs', component: FormlyFieldTabs },
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
    }),
    FormlyBootstrapModule,
  ]
})
export class ProListModule { }
