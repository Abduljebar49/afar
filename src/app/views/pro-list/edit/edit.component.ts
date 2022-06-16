import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id: any;
  data: any;
  dataIsLoaded: boolean = false;
  // type: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: AdminService,
    private spinner: NgxSpinnerService
  ) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    // this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }
  form = new FormGroup({});
  model: any = [];
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  async ngOnInit(): Promise<void> {
    // const temp = JSON.parse(localStorage.getItem('form_data')!);
    // var temp;
    // temp = JSON.parse(localStorage.getItem('form_data-pro')!);
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
                // {
                //   key: 'education_file',
                //   type: 'input',
                //   className: 'col-6 mt-1',
                //   templateOptions: {
                //     label: 'Educational File',
                //     type: 'file',
                //     required: true,
                //   },
                // },
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
                    type: 'date',
                  },
                },
                {
                  key: 'end_date',
                  type: 'input',
                  className: 'col-6',
                  templateOptions: {
                    label: 'Up to',
                    type: 'date',
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
                // {
                //   key: 'employment_file',
                //   type: 'input',
                //   className: 'col-6 mt-1',
                //   templateOptions: {
                //     label: 'Employment File',
                //     type: 'file',
                //     required: true,
                //   },
                // },
              ],
            },
          },
        ],
      },
    ];
    var data: any;
    var res = this.service.getProfessionalWithId(this.id).toPromise();
    console.log('res : ');
    var temp: any = await res;
    console.log('res : 2');
    data = temp[0];
    this.data = JSON.stringify(data);
    this.data = JSON.parse(this.data);
    // console.log('data : ', data);
    console.log('res : 3');
    this.model = {
      // applaidFor: data.applaidFor,
      educations: data.educations,
      applied_for: data.professional_register[0].applied_for,
      type: data.professional_register[0].type,
      employment_records: data.employment_records,
      kebele: data.kebele,
      name: data.name,
      city: data.city,
      house_no: data.house_no,
      gender: data.gender,
      phone_number: data.phone_number,
      woreda: data.woreda,
    };
    console.log('res : ');
    this.dataIsLoaded = true;
  }

  async submit() {
    var tempEdu = this.data.educations;
    console.log('tEmpEd : ', tempEdu);
    // console.log("educat ion : ",educationsExist)
    if (this.form.valid) {
      console.log('valid submitted data : ', this.model);
      this.spinner.show();
      if (
        this.data.kebele != this.model.kebele ||
        this.data.name != this.model.name ||
        this.data.city != this.model.city ||
        this.data.house_no != this.model.house_no ||
        this.data.gender != this.model.gender ||
        this.data.phone_number != this.model.phone_number ||
        this.data.woreda != this.model.woreda
      ) {
        var data = {
          kebele: this.model.kebele,
          name: this.model.name,
          city: this.model.city,
          house_no: this.model.house_no,
          gender: this.model.gender,
          phone_number: this.model.phone_number,
          woreda: this.model.woreda,
        };

        var res = await this.service
          .editProfesionalProfile(this.data.id, data)
          .toPromise();
      }

      if (this.model.educations) {
        var eduList = this.model.educations;
        var educations: any[] = [];
        var educationsExist: any[] = [];
        eduList.forEach((ele: any) => {
          if (ele.id != undefined) {
            educationsExist.push(ele);
            // var antoherTem = tn
          } else {
            ele.professional_id = this.data.id;
            educations.push(ele);
          }
        });

        if (educations.length > 0) {
          console.log('data : ', educations);
          await this.service.educationEditNew({ educations }).toPromise();
        }
        if (educationsExist.length > 0) {
          var tempEdu = this.data.educations;
          tempEdu.forEach(async (ele: any) => {
            var isDeleted = true;
            educationsExist.forEach(async (el: any) => {
              if (el.id == ele.id) {
                isDeleted = false;
                if (JSON.stringify(el) === JSON.stringify(ele)) {
                } else {
                  await this.service.educationEdit(el).toPromise();
                }
              }
            });
            if (isDeleted) {
              await this.service.educationDelete(ele.id).toPromise();
            }
          });
        }
      }
      if (this.model.employment_records) {
        var emp_records = this.model.employment_records;
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
            .employmentRecordEditNew({ employments })
            .toPromise();
        }
        if (employmentExist.length > 0) {
          var tempEdu = this.data.employment_records;
          tempEdu.forEach(async (ele: any) => {
            var isDeleted = true;
            employmentExist.forEach(async (el: any) => {
              if (el.id == ele.id) {
                isDeleted = false;
                if (JSON.stringify(el) === JSON.stringify(ele)) {
                } else {
                  await this.service.employmentRecordEdit(el).toPromise();
                }
              }
            });
            if (isDeleted) {
              await this.service.employmentRecordDelete(ele.id).toPromise();
            }
          });
        }
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.spinner.hide();
    }
  }
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
}
