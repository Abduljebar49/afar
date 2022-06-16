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
        fieldGroupClassName: 'mt-3 row',
        fieldGroup: [
          {
            type: 'select',
            key: 'applied_for',
            className: 'col-6',
            templateOptions: {
              label: 'Applaid For',
              required: true,
              options: [
                {
                  value: 'Contruction',
                  label: 'Contruction',
                },
                {
                  value: 'Design',
                  label: 'Design',
                },
              ],
            },
          },
          {
            type: 'select',
            key: 'type',
            className: 'col-6',
            templateOptions: {
              label: 'Type Of Registration',
              required: true,
              options: [
                {
                  value: 'New Registration',
                  label: 'New Registration',
                },
                {
                  value: 'Renew',
                  label: 'Renew',
                },
                {
                  value: 'Upgrading',
                  label: 'Upgrading',
                },
              ],
            },
          },
          {
            type: 'input',
            key: 'name',
            className: 'col-6',
            templateOptions: {
              required: true,
              label: 'Name',
              input: 'text',
            },
          },
          {
            type: 'select',
            key: 'gender',
            className: 'col-6',
            templateOptions: {
              label: 'Gender',
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
          // <hr />
          {
            className: 'section-label',
            template: '<div class="mt-2 mb-2"><strong>Address:</strong></div>',
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-6',
                type: 'input',
                key: 'city',
                templateOptions: {
                  label: 'City',
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
            ],
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
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
                className: 'col-4',
                type: 'input',
                key: 'phone_number',
                templateOptions: {
                  type: 'text',
                  label: 'Tel No',
                },
              },
            ],
          },
          {
            className: 'section-label',
            template:
              '<div class="mt-2 mb-2"><strong>Ecucational Data:</strong></div>',
          },
          {
            key: 'educations',
            type: 'repeat',
            // className:'row',

            templateOptions: {
              addText: 'Add Education',
            },
            fieldArray: {
              // className:'row',
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  key: 'educational_institute',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Educational Institution',
                    required: true,
                  },
                },
                {
                  key: 'field_of_study',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Field of study',
                    required: true,
                  },
                },
                {
                  key: 'professional_title',
                  type: 'select',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Professional title',
                    required: true,
                    options: [
                      {
                        value: 'certificate',
                        label: 'Certificate',
                      },
                      {
                        value: 'diploma',
                        label: 'Diploma',
                      },
                      {
                        value: 'degree',
                        label: 'Degree',
                      },
                    ],
                  },
                },
                {
                  key: 'date_received',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Date Recieved',
                    type: 'date',
                    required: true,
                  },
                },
                {
                  key: 'education_file',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Educational File',
                    type: 'file',
                    required: true,
                  },
                },
              ],
            },
          },
          {
            key: 'employment_records',
            type: 'repeat',
            templateOptions: {
              addText: 'Add Employment Record',
            },
            fieldArray: {
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  key: 'employer',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    label: 'Name of Employer',
                  },
                },
                {
                  key: 'start_date',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    label: 'From',
                    type:'date'
                  },
                },
                {
                  key: 'end_date',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    label: 'Up to',
                    type:'date'
                  },
                },
                // {
                //   key:'year',
                //   type:'input',
                //   className:'col-6',
                //   templateOptions:{
                //     label:'Year',
                //     type:'number',
                //   }
                // },
                // {
                //   key:'month',
                //   type:'input',
                //   className:'col-6',
                //   templateOptions:{
                //     label:'Month',
                //     type:'month',
                //   }
                // },
                // {
                //   key: 'month_year',
                //   type: 'input',
                //   className: 'col-6',
                //   templateOptions: {
                //     label: 'Month-Year',
                //     type: 'month',
                //   },
                // },
                {
                  key: 'employment_file',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Employment File',
                    type: 'file',
                    required: true,
                  },
                },
              ],
            },
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

      try{
        var sumit = await this.formService
          .submitProfessionalForm(this.model)
          .toPromise();
  
          // result = sumit;
          if (sumit?.toString() == '1') {
            Swal.fire('Registered', 'Successfully Registered', 'success');
          } else {
            Swal.fire('with error', 'Sth wrong with registration', 'error');
          }

      }catch(error)
      {
        Swal.fire('with error', 'Sth wrong with registration', 'error');
      }
      console.log(result, ' this is after response');
      this.spinner.hide();
      console.log('items ; ', items);

    }
  }

  public getCapitalizedTitle(type: string) {
    var charAt = type.charAt(0).toUpperCase();
    return charAt + type.substring(1, type.length);
  }
}
