import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-horizontal-wrapper',
  template: `
    <div class="form-group row">
      <label [attr.for]="id" class="col-sm-5 col-form-label" *ngIf="to.label">
        {{ to.label }}
        <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>
      </label>
      <div class="col-sm-5">
        <ng-template #fieldComponent></ng-template>
      </div>
      </div>
      `,
    })
    export class FormlyHorizontalWrapper extends FieldWrapper {
    // <div *ngIf="showError" class="col-sm-3 invalid-feedback d-block">
    //   <formly-validation-message [field]="field"></formly-validation-message>
    // </div>
}