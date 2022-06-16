import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  usersLoaded: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dataLoaded: boolean = false;
  isTypeLoaded: boolean = true;
  type: string = 'pending';
  // type:any;

  changeType(text: string) {
    this.type = text;
  }
  constructor(
    private service: AdminService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) // private indexService: IndexService
  {
    // var temp = activatedRoute.snapshot.queryParamMap.get('type')??'';
    // this.changeType(temp);
  }

  async ngOnInit(): Promise<void> {
    console.log('ngOnInit from Pending');
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };
    await this.loadDataFromServer();
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('queryParams ', queryParams);
      this.changeType(queryParams['type']);
      this.filterTheData(queryParams['type']);
    });
  }

  filterTheData(type: string) {
    this.dataLoaded = false;
    this.spinner.show();
    var newData: any[] = [];
    this.usersLoaded.forEach((ele: any) => {
      var temp = ele.professional_register;
      var len = temp.length - 1;
      if (ele.professional_register[len].status == type) {
        newData.push(ele);
      }

      if (type == 'pending' && ele.professional_register[len].status == null) {
        newData.push(ele);
      }
    });
    this.dataLoaded = true;
    this.spinner.hide();
    this.allUsers = newData;
    console.log('newData : ', newData);
  }

  async loadDataFromServer() {
    console.log('inside .........');
    this.spinner.show();
    var res = this.service.getProfessionalMemberList().toPromise();

    this.allUsers = await res;
    var temp = JSON.stringify(this.allUsers);
    temp = JSON.parse(temp);
    this.usersLoaded = temp;
    this.dataLoaded = true;

    // this.allUsers.invalidate();
    this.spinner.hide();
    console.log('res : ', await res);
  }

  users(): void {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openDetail(item: any, type: any) {
    console.log('item : ', item);
    if (type == 'view') {
      this.router.navigateByUrl('admin/licence/pro/view?id=' + item.id);
    } else {
      this.router.navigateByUrl('admin/licence/pro/edit?id=' + item.id);
    }
  }
}
