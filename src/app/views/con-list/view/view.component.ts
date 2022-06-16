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
  len: number = 0;
  hideDetailView: boolean = false;
  loading: boolean = false;
  public expendableFacilityCategoriesIndex: boolean[] = [false, false, false];

  // type: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AdminService
  ) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
  }
  async ngOnInit(): Promise<void> {
    var res = this.service.getContractualWithId(this.id).toPromise();

    this.data = await res;
    this.data = this.data[0];
    var temp = this.data.contractor_application;
    this.len = temp.length - 1;
    console.log('data : ', this.data);
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

  approveData() {
    const item = this.data;
    Swal.fire({
      title: 'Do you want to delete this licence request',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.approveConfirmed(item);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  approveConfirmed(item: any) {
    console.log('inside confirm');
    var list;
    list = JSON.parse(localStorage.getItem('form_data-con')!);
    // console.log("new list : ",list, " type : ",this.type);

    // const list = JSON.parse(localStorage.getItem('form_data')!);
    var index = 0;
    if (list != null && list != undefined) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == item.id) {
          index = i;
        }
      }
      list[index].status = 'approved';
      localStorage.setItem('form_data-con', JSON.stringify(list));
      console.log('new list : ', list);
      Swal.fire('Successfully approved', '', 'success');
      console.log('updatedList : ', list);
    }
    window.location.reload();
  }

  deleteConfirmed(item: any) {
    // const list = JSON.parse(localStorage.getItem('form_data')!);
    var list;
    list = JSON.parse(localStorage.getItem('form_data-con')!);

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
      'admin/licence-con/certificate-con' + '?id=' + this.data.id
    );
  }

  openEditPage() {
    this.router.navigateByUrl('admin/licence-con/edit' + '?id=' + this.data.id);
  }

  toggleExpandableFacilityCategories(index: number): void {
    this.expendableFacilityCategoriesIndex[index] =
      !this.expendableFacilityCategoriesIndex[index];
  }

  openDetail(type: any) {
    // console.log('item : ', this.data);
    if (type == 'view') {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Approved!', 'Your data has been approved.', 'success');
        }
      });
    } else if (type == 'delete') {
    } else {
      this.router.navigateByUrl('admin/licence/con/edit?id=' + this.data.id);
    }
  }
}
