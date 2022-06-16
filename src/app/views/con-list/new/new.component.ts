import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { FormService } from '../../../services/form.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  // type: string = '';
  countries: any;
  title: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private formService: FormService,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(): void {
    this.fields = [
      {
        type: 'tabs',
        fieldGroup: [
          {
            templateOptions: { label: 'Personal data' },
            fieldGroup: [
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Company Information:</strong></div>',
              },
              {
                fieldGroupClassName: 'mt-3 row',
                fieldGroup: [
                  {
                    type: 'input',
                    key: 'company_name',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Company Name',
                      required: true,
                    },
                  },
                  {
                    type: 'input',
                    key: 'first_name',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Owner First Name',
                      required: true,
                    },
                  },
                  {
                    type: 'input',
                    key: 'last_name',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Owner Father Name',
                      required: true,
                    },
                  },
                  {
                    type: 'select',
                    key: 'gender',
                    className: 'col-6',
                    templateOptions: {
                      label: "Owner's Gender",
                      required: true,
                      options: [
                        {
                          value: 'Male',
                          label: 'Male',
                        },
                        {
                          value: 'Female',
                          label: 'Female',
                        },
                      ],
                    },
                  },
                  {
                    type: 'select',
                    key: 'nationality',
                    className: 'col-6',
                    templateOptions: {
                      required: true,
                      label: 'Owners Nationality',
                      options: this.formService.getJSON(),
                      // propValue:'name',
                      // propLabel:'name',
                      labelProp: 'name',
                      valueProp: 'name',
                    },
                  },
                  {
                    type: 'input',
                    key: 'manager_name',
                    className: 'col-6',
                    templateOptions: {
                      label: 'General Manager Name',
                      required: true,
                    },
                  },
                  {
                    type: 'input',
                    key: 'service_type',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Construction Service Type',
                      required: true,
                    },
                  },
                  {
                    type: 'input',
                    key: 'service_level',
                    className: 'col-6',
                    templateOptions: {
                      label: 'Construction Service Level',
                      required: true,
                    },
                  },
                  {
                    className: 'section-label',
                    template:
                      '<div class="mt-2 mb-2"><strong>Address:</strong></div>',
                  },
                  {
                    fieldGroupClassName: 'row',
                    // key: 'address',
                    fieldGroup: [
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'region',
                        templateOptions: {
                          label: 'Region',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'zone',
                        templateOptions: {
                          label: 'Zone',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'woreda',
                        templateOptions: {
                          label: 'woreda',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'city',
                        templateOptions: {
                          label: 'City',
                        },
                      },
                      {
                        className: 'col-4',
                        type: 'input',
                        key: 'sub_city',
                        templateOptions: {
                          type: 'text',
                          label: 'Sub City',
                        },
                      },

                      {
                        className: 'col-4',
                        type: 'input',
                        key: 'kebele',
                        templateOptions: {
                          type: 'text',
                          label: 'Kebele',
                        },
                      },
                      {
                        className: 'col-4',
                        type: 'input',
                        key: 'house_no',
                        templateOptions: {
                          type: 'text',
                          label: 'House Number',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'phone_numner',
                        templateOptions: {
                          label: 'Office Phone Number',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'mobile_number',
                        templateOptions: {
                          label: 'Cell Phone Number',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'fax_number',
                        templateOptions: {
                          label: 'Fax Number',
                        },
                      },
                      {
                        className: 'col-6',
                        type: 'input',
                        key: 'email',
                        templateOptions: {
                          label: 'Email',
                        },
                      },
                    ],
                  },
                  {
                    fieldGroupClassName: 'row',
                    fieldGroup: [],
                  },
                ],
              },
              {
                className: 'section-label',
                template: '<hr />',
              },
              {
                key: 'personalInformationConfirm',
                type: 'cus-checkbox',
                className: 'inline pr-1',
                // className:'checkbox-label',
                templateOptions: {
                  label:
                    'I can confirm that the information that I have filled above is correct and I have an obligation to inform the organization immediately if I change my address',
                  // label: 'I accept the the following term',
                  required: true,
                  indeterminate: false,
                },
              },
            ],
          },
          {
            templateOptions: { label: 'Company Info' },
            fieldGroup: [
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Share Holder:</strong></div>',
              },
              {
                key: 'shareholders',
                type: 'repeat',
                fieldGroupClassName: 'row',
                templateOptions: {
                  addText: 'Add Share Holder',
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      key: 'shareholders',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Name of Share Holder',
                        required: true,
                      },
                    },
                    {
                      key: 'share_amount',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Share Amount',
                        type: 'number',
                        required: true,
                      },
                    },
                  ],
                },
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Top 5 of Previous Projects:</strong></div>',
              },
              {
                key: 'projects',
                type: 'repeat',
                templateOptions: {
                  addText: 'Add Project',
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      key: 'project_name',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Project Name',
                        required: true,
                      },
                    },
                    {
                      key: 'project_value',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Project Value',
                        type: 'number',
                        required: true,
                      },
                    },
                  ],
                },
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Prove Data Validity:</strong></div>',
              },
              {
                key: 'service_day',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  type: 'date',
                  label: 'Service Day',
                  required: true,
                },
              },
              {
                key: 'service_time',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  type: 'time',
                  label: 'Service Time',
                  required: true,
                },
              },
              {
                key: 'certificate_day',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  type: 'date',
                  label: 'Certificate date',
                  required: true,
                },
              },
              {
                key: 'certificate_time',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  type: 'time',
                  label: 'Certificate Time',
                  required: true,
                },
              },
              {
                key: 'penalityRecordRemark',
                type: 'input',
                className: 'col-6',
                templateOptions: {
                  label: 'Penality Record Remark',
                  required: true,
                },
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Evidence document</strong></div>',
              },
              {
                key: 'evidenceDoc',
                type: 'file',
                templateOptions: {
                  // label:'Evidence Doc',
                  required: false,
                },
              },
            ],
          },
          {
            templateOptions: { label: 'Additional Info' },
            fieldGroup: [
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Construction Equipment Owned</strong></div>',
              },
              {
                key: 'equipments',
                type: 'repeat',
                templateOptions: {
                  addText: 'Add Construction Equipment',
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      key: 'property_type_id',
                      type: 'select',
                      className: 'col-6',
                      templateOptions: {
                        options: this.constructionMaterial,
                        label: 'Construction Type',
                        labelProp: 'name',
                        valueProp: 'name',
                        required: true,
                      },
                    },
                    {
                      key: 'capacity',
                      type: 'input',
                      className: 'col-3',
                      templateOptions: {
                        label: 'Capacity',
                        required: true,
                      },
                    },
                    {
                      key: 'manufactured_date',
                      type: 'input',
                      className: 'col-3',
                      templateOptions: {
                        label: 'Manufactured Year',
                        required: true,
                      },
                    },
                  ],
                },
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Employees of the company</strong></div>',
              },
              {
                key: 'employee_records',
                type: 'repeat',
                fieldGroupClassName: 'row',
                templateOptions: {
                  addText: 'Add Employees Info',
                },
                fieldArray: {
                  fieldGroupClassName: 'row',
                  fieldGroup: [
                    {
                      key: 'position',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Position',
                        required: true,
                      },
                    },
                    {
                      key: 'employment_type',
                      type: 'select',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Employment Type',
                        required: true,
                        options: [
                          {
                            label: 'Permanent',
                            value: 'Permanent',
                          },
                          {
                            label: 'Contractual',
                            value: 'Contractual',
                          },
                        ],
                      },
                    },
                    {
                      key: 'number_of_employees',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        type: 'number',
                        required: true,
                        label: 'Number of Employees',
                      },
                    },
                    {
                      key: 'remark',
                      type: 'input',
                      className: 'col-6',
                      templateOptions: {
                        label: 'Remark',
                        required: true,
                      },
                    },
                  ],
                },
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Attach Company information Doc</strong></div>',
              },
              {
                key: 'companyInfo',
                type: 'file',
                templateOptions: {
                  required: true,
                  // label:'Attach Company information Doc'
                },
              },
              // {
              //   className:'row',
              //   fieldGroup:[
              //     {
              //       type:'checkbox',
              //       className:'col-2',
              //       templateOptions:{
              //         pattern:'true',
              //       }
              //     },
              //     {
              //       className: 'section-label',
              //       template:
              //         '<span class="mt-2 mb-2">description about checkbox </span>',
              //     },
              //   ]
              // },
              {
                className: 'section-label',
                template: '<hr />',
              },
              {
                // key: 'Checkbox',
                type: 'cus-checkbox',
                className: 'col-6 checkbox-label',
                templateOptions: {
                  label:
                    'I know that the registration will not take effect and the appropriate legal action will be taken if the information provided is incorrect',
                  // description: 'In order to proceed, please accept terms',
                  // label: ' I accept the the following term',
                  pattern: 'true',
                  required: true,
                },
                validation: {
                  messages: {
                    pattern: 'Please accept the terms',
                  },
                },
              },
              // {
              //   className: 'section-label',
              //   template:
              //     '<hr />',
              // },

              {
                // key: 'Checkbox',
                type: 'cus-checkbox',
                className: 'col-6',
                templateOptions: {
                  label:
                    'I can assure with my signature that evidence provided above are correct',
                  // label: 'I accept the the following term',
                  pattern: 'true',
                  required: true,
                },
                validation: {
                  messages: {
                    pattern: 'Please accept the terms',
                  },
                },
              },
              {
                // key: 'Checkbox',
                type: 'cus-checkbox',
                className: 'col-6',
                templateOptions: {
                  label:
                    'I have an obligation to provide the necessary information when requested and inform the new address when I change my address',
                  // description: 'In order to proceed, please accept terms',
                  // label: 'I accept the the following term',
                  pattern: 'true',
                  required: true,
                },
                validation: {
                  messages: {
                    pattern: 'Please accept the terms',
                  },
                },
              },
              {
                className: 'section-label',
                template: '<hr />',
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Attach your signature</strong></div>',
              },

              {
                key: 'approvanceSignature',
                type: 'file',
                templateOptions: {
                  required: true,
                  // label:'Attach your signature'
                },
              },
            ],
          },
        ],
      },
    ];
  }

  form = new FormGroup({});
  model: any = {
    education: [{}],
    id: 1,
    status: 'pending',
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  constructionMaterial = [
    {
      name: 'Bulldozer',
    },
    {
      name: 'Dump Trucks',
    },
    {
      name: 'Compactor',
    },
    {
      name: 'Front Loader',
    },
    {
      name: 'Backhoes',
    },
    {
      name: 'Cranes',
    },
    {
      name: 'Excavators',
    },
    {
      name: 'Trenchers',
    },
    {
      name: 'Mixer',
    },
    {
      name: 'Motor Grader',
    },
    {
      name: 'Bucket Truck',
    },
    {
      name: 'Forklift',
    },
  ];

  async submit() {
    if (this.form.valid) {
      
      var items;
      var result = '0';
      this.spinner.show();

      var sumit = this.formService.submitContractorForm(this.model).toPromise();
      result = await sumit.toString();
      
      console.log('items ; ', items);


      this.spinner.hide();
      if (result == '1') {
        Swal.fire('Registered', 'Successfully Registered', 'success');
      } else {
        Swal.fire('with error', 'Sth wrong with registration', 'error');
      }
    }
  }

  // private buildGroups(response: any) {
  //   return response.reduce(
  //     (obj: any, value: any) => ({
  //       ...obj,
  //       [value.group]: [
  //         ...(obj[value.group] || []),
  //         { key: value.name, value: value.name },
  //       ],
  //     }),
  //     {}
  //   );
  // }
  // private buildFields(groups: any) {
  //   return (<any>Object)
  //     .entries(groups)
  //     .map(([key, value]: [string, string]) => ({
  //       type: 'multicheckbox',
  //       key,
  //       templateOptions: {
  //         label: key,
  //         options: value,
  //       },
  //     }));
  // }

  public getCapitalizedTitle(type: string) {
    var charAt = type.charAt(0).toUpperCase();
    return charAt + type.substring(1, type.length);
  }
}
