import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-input',
    template: `
 <div class="row mt-2">
    <div style="width:4%;">
        <input id="checkboxLabel" type="checkbox" [formControl]="formControl" [formlyAttributes]="field" style="width:15px; height:15px">
    </div>
    <div style="width:93%">
    <label for="checkboxLabel">
    {{to.label}}
    </label>
    </div>
 </div>
 `,
})

export class FormlyCheckboxField extends FieldType<FieldTypeConfig>{ }

// export class FormlyFieldCheckbox extends FieldType<FieldTypeConfig> {}
