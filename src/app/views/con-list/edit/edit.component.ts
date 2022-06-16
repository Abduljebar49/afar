import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id: any;
  type: any;
  len: number = 0;
  data:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private indexService: FormService,
    private service: AdminService,
    private formService: FormService,
    private spinner:NgxSpinnerService
  ) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    // this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }
  form = new FormGroup({});
  model: any = {
    education: [{}],
    id: 1,
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  async ngOnInit(): Promise<void> {
    // const temp = JSON.parse(localStorage.getItem('form_data')!);
    // var temp;
    // temp = JSON.parse(localStorage.getItem('form_data-con')!);
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
              // {
              //   key: 'personalInformationConfirm',
              //   type: 'cus-checkbox',
              //   className: 'inline pr-1',
              //   // className:'checkbox-label',
              //   templateOptions: {
              //     label:
              //       'I can confirm that the information that I have filled above is correct and I have an obligation to inform the organization immediately if I change my address',
              //     // label: 'I accept the the following term',
              //     required: true,
              //     indeterminate: false,
              //   },
              // },
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
                key: 'contractor_property',
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
                        valueProp: 'id',
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
                        type:'date'
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
              // {
              //   className: 'section-label',
              //   template:
              //     '<div class="mt-2 mb-2"><strong>Attach Company information Doc</strong></div>',
              // },
              // {
              //   key: 'companyInfo',
              //   type: 'file',
              //   templateOptions: {
              //     required: true,
              //     // label:'Attach Company information Doc'
              //   },
              // },
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
              // {
              //   className: 'section-label',
              //   template: '<hr />',
              // },
              // {
              //   // key: 'Checkbox',
              //   type: 'cus-checkbox',
              //   className: 'col-6 checkbox-label',
              //   templateOptions: {
              //     label:
              //       'I know that the registration will not take effect and the appropriate legal action will be taken if the information provided is incorrect',
              //     // description: 'In order to proceed, please accept terms',
              //     // label: ' I accept the the following term',
              //     pattern: 'true',
              //     required: true,
              //   },
              //   validation: {
              //     messages: {
              //       pattern: 'Please accept the terms',
              //     },
              //   },
              // },
              // // {
              // //   className: 'section-label',
              // //   template:
              // //     '<hr />',
              // // },

              // {
              //   // key: 'Checkbox',
              //   type: 'cus-checkbox',
              //   className: 'col-6',
              //   templateOptions: {
              //     label:
              //       'I can assure with my signature that evidence provided above are correct',
              //     // label: 'I accept the the following term',
              //     pattern: 'true',
              //     required: true,
              //   },
              //   validation: {
              //     messages: {
              //       pattern: 'Please accept the terms',
              //     },
              //   },
              // },
              // {
              //   // key: 'Checkbox',
              //   type: 'cus-checkbox',
              //   className: 'col-6',
              //   templateOptions: {
              //     label:
              //       'I have an obligation to provide the necessary information when requested and inform the new address when I change my address',
              //     // description: 'In order to proceed, please accept terms',
              //     // label: 'I accept the the following term',
              //     pattern: 'true',
              //     required: true,
              //   },
              //   validation: {
              //     messages: {
              //       pattern: 'Please accept the terms',
              //     },
              //   },
              // },
              {
                className: 'section-label',
                template: '<hr />',
              },
              {
                className: 'section-label',
                template:
                  '<div class="mt-2 mb-2"><strong>Attach your signature</strong></div>',
              },

              // {
              //   key: 'approvanceSignature',
              //   type: 'file',
              //   templateOptions: {
              //     required: true,
              //     // label:'Attach your signature'
              //   },
              // },
            ],
          },
        ],
      },
    ];

    var data: any;
    var res = this.service.getContractualWithId(this.id).toPromise();

    data = await res;
    data = data[0];
    this.data = JSON.stringify(data);
    this.data = JSON.parse(this.data);
    var temp = data.contractor_application;
    this.len = temp.length - 1;
    console.log('data  : ', data);
    this.model = {
      id: 1,
      status: data.status,
      region: data.region,
      zone: data.zone,
      woreda: data.woreda,
      city: data.city,
      subCity: data.subCity,
      kebele: data.kebele,
      house_no: data.house_no,
      phone_number: data.phone_number,
      mobile_number: data.mobile_number,
      fax_number: data.fax_number,
      email: data.email,
      shareholders: data.shareholders,
      projects: data.projects,
      contractor_property: data.contractor_property,
      employee_records: data.employee_records,
      company_name: data.company_name,
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      nationality: data.nationality,
      manager_name: data.manager_name,
      service_type: data.service_type,
      service_level: data.service_level,
      service_day: data.services[0].service_day,
      service_time: data.services[0].service_time,
      certificate_day: data.services[0].certificate_day,
      certificate_time: data.services[0].certificate_time,
      remark: data.remark,
    };

    // console.log('this.model : ', this.model);
  }

  async submit() {
    if (this.form.valid) {
      console.log('valid submitted data : ', this.model);
      this.spinner.show();
      // if (
      //   this.data.kebele != this.model.kebele ||
      //   this.data.name != this.model.name ||
      //   this.data.city != this.model.city ||
      //   this.data.house_no != this.model.house_no ||
      //   this.data.gender != this.model.gender ||
      //   this.data.phone_number != this.model.phone_number ||
      //   this.data.woreda != this.model.woreda
      // ) {

      //   var data = {
      //     kebele: this.model.kebele,
      //     name: this.model.name,
      //     city: this.model.city,
      //     house_no: this.model.house_no,
      //     gender: this.model.gender,
      //     phone_number: this.model.phone_number,
      //     woreda: this.model.woreda,
      //   };
      //   var res = await this.service
      //     .editContractualProfile(this.data.id, data)
      //     .toPromise();
      // }
      if (this.model.contractor_property) {
        var eduList = this.model.contractor_property;
        var contractor_property: any[] = [];
        var propertyExist: any[] = [];
        eduList.forEach((ele: any) => {
          if (ele.id != undefined) {
            propertyExist.push(ele);
            // var antoherTem = tn
          } else {
            ele.professional_id = this.data.id;
            contractor_property.push(ele);
          }
        });

        if (contractor_property.length > 0) {
          console.log('data : ', contractor_property);
          await this.service.constructionPropertyEditNew({ contractor_property }).toPromise();
        }
        if (propertyExist.length > 0) {
          var tempEdu = this.data.contractor_property;
          tempEdu.forEach(async (ele: any) => {
            var isDeleted = true;
            propertyExist.forEach(async (el: any) => {
              if (el.id == ele.id) {
                isDeleted = false;
                if (JSON.stringify(el) === JSON.stringify(ele)) {
                } else {
                  await this.service.constructionPropertyEdit(el).toPromise();
                }
              }
            });
            if (isDeleted) {
              await this.service.constructionPropertyDelete(ele.id).toPromise();
            }
          });
        }
      }



      if (this.model.employee_records) {
        var emp_records = this.model.employee_records;
        var employments: any[] = [];
        var employmentExist: any[] = [];
        emp_records.forEach((ele: any) => {
          if (ele.id != undefined || ele.id != null) {
            employmentExist.push(ele);
          } else {
            ele.professional_id = this.data.id;
            employments.push(ele);
          }
        });
        if (employments.length > 0) {
          await this.service
            .conEmploymentRecordEditNew({ employments })
            .toPromise();
        }
        if (employmentExist.length > 0) {
          var tempEdu = this.data.employee_records;
          tempEdu.forEach(async (ele: any) => {
            var isDeleted = true;
            employmentExist.forEach(async (el: any) => {
              if (el.id == ele.id) {
                isDeleted = false;
                if (JSON.stringify(el) === JSON.stringify(ele)) {
                } else {
                  await this.service.conEmploymentRecordEdit(el).toPromise();
                }
              }
            });
            if (isDeleted) {
              await this.service.conEmploymentRecordDelete(ele.id).toPromise();
            }
          });
        }
      }

    }
  }

  constructionMaterial = [
    {
      name: 'Bulldozer',
      id:1,
    },
    {
      name: 'Dump Trucks',
      id:2,
    },
    {
      name: 'Compactor',
      id:3,
    },
    {
      name: 'Front Loader',
      id:4,
    },
    {
      name: 'Backhoes',
      id:5,
    },
    {
      name: 'Cranes',
      id:6,
    },
    {
      name: 'Excavators',
      id:7,
    },
    {
      name: 'Trenchers',
      id:8,
    },
    {
      name: 'Mixer',
      id:9,
    },
    {
      name: 'Motor Grader',
      id:10,
    },
    {
      name: 'Bucket Truck',
      id:11,
    },
    {
      name: 'Forklift',
      id:12,
    },
  ];
}
