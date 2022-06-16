import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  data: any;
  id: any;
  hideDetailView: boolean = false;
  loading: boolean = false;
  len:number = 0;
  status:string = "pending";
  professionalPart:any;
  public expendableFacilityCategoriesIndex: boolean[] = [false, false, false];

  // type: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AdminService
  ) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    // this.type = this.activatedRoute.snapshot.queryParamMap.get('type');
  }
  async ngOnInit(): Promise<void> {
    // var temp;
    //   temp = JSON.parse(localStorage.getItem('form_data-pro')!);

    // if (temp != null && temp != undefined) {
    //   temp.forEach((ele:any) => {
    //     if (ele.id == this.id) {
    //       this.data = ele;
    //     }
    //   });
    // }
    var res = this.service.getProfessionalWithId(this.id).toPromise();
    this.data = await res;
    this.data = this.data[0];
    var temp = this.data.professional_register;
    this.len = temp.length -1;
    this.status = this.data.professional_register[this.len].status;
    console.log("array size : ",this.data);
    console.log('status : ', this.status);
    // console.log('data : ', JSON.stringify(this.data));
  }

  deleteData() {
    const item = this.data;
    var index = 0;
    Swal.fire({
      title: 'Do you want to delete this licence request',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteConfirmed(item);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  // approveData() {
  //   const item = this.data;
  //   Swal.fire({
  //     title: 'Do you want to delete this licence request',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: `Yes`,
  //     denyButtonText: `No`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       this.approveConfirmed(item);
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info');
  //     }
  //   });
  // }

  // approveConfirmed(item: any) {
  //   console.log('inside confirm');
  //   var list;
  //   list = JSON.parse(localStorage.getItem('form_data-pro')!);
  //   // console.log("new list : ",list, " type : ",this.type);

  //   // const list = JSON.parse(localStorage.getItem('form_data')!);
  //   var index = 0;
  //   if (list != null && list != undefined) {
  //     for (let i = 0; i < list.length; i++) {
  //       if (list[i].id == item.id) {
  //         index = i;
  //       }
  //     }
  //     list[index].status = 'approved';
  //     localStorage.setItem('form_data-pro', JSON.stringify(list));
  //     console.log('new list : ', list);
  //     Swal.fire('Successfully approved', '', 'success');
  //     console.log('updatedList : ', list);
  //   }
  //   window.location.reload();
  // }

  deleteConfirmed(item: any) {
    // const list = JSON.parse(localStorage.getItem('form_data')!);
    var list;
    list = JSON.parse(localStorage.getItem('form_data-pro')!);

    if (list != null && list != undefined) {
      // for(let i=0;i<list.length;i++){
      //   if(list[i].id == item.id){
      //     index = i;
      //   }
      // }

      var listNew = list as [];
      // listNew.indexOf(item);
      console.log('listeNesw : ', listNew);
    }
    Swal.fire('deleted successfully!', '', 'success');
  }

  openGenerateCertificate() {
    this.router.navigateByUrl(
      'admin/licence-pro/certificate-pro' + '?id=' + this.data.id
    );
  }

  openEditPage() {
    this.router.navigateByUrl('admin/licence-pro/edit' + '?id=' + this.data.id);
  }

  toggleExpandableFacilityCategories(index: number): void {
    this.expendableFacilityCategoriesIndex[index] =
      !this.expendableFacilityCategoriesIndex[index];
  }
  openDetail(type: any) {
    // console.log('item : ', this.data);
    // console.log("sending this to finance user");
    if (type == 'view') {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.service.approveProfessionalProfile(this.data.professional_register[this.len].id).toPromise();
          Swal.fire('Approved!', 'Your data has been approved.', 'success');
        }
      });
    }else if(type=='pay'){
      Swal.fire({
        title: 'Paid, Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, it is paid!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.service.paidProfessionalProfile(this.data.professional_register[this.len].id).toPromise();
          Swal.fire('Paid!', 'Your data has been approved as paid.', 'success');
        }
      });

    }
    else if(type=='delete'){
      Swal.fire({
        title: 'Delete, are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          // await this.service.approveProfessionalProfile(this.data.id).toPromise();
          Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
          console.log("redirect to list")
        }
      });
    } else {
      this.router.navigateByUrl('admin/licence/pro/edit?id=' + this.data.id);
    }
  }
}
