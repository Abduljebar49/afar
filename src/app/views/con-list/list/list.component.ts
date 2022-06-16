import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  allUsers: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dataLoaded: boolean = false;
  // type:any;
  constructor(
    private service: AdminService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit from Pending');
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pagingType: 'name',
      pageLength: 5,
      processing: true,
    };

    this.loadDataFromServer();
    // this.users();
  }

  //this.dataLoaded = true;

  async loadDataFromServer() {
    console.log('inside .........');
    this.spinner.show();
    var res = this.service.getContractualMemberList().toPromise();

    this.allUsers = await res;
    this.dataLoaded = true;
    this.spinner.hide();
    console.log('res : ', await res);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openDetail(item: any, type: any) {
    console.log('item : ', item);
    if (type == 'view') {
      this.router.navigateByUrl('admin/licence/con/view?id=' + item.id);
    } else {
      this.router.navigateByUrl('admin/licence/con/edit?id=' + item.id);
    }
  }
}
