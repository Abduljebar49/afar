import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPage = 'login';
  email: string = '';
  password: string = '';
  message:string='';

  constructor(
    private router: Router,
    private loginService:LoginService,
    private spinner:NgxSpinnerService
    ) {}

  ngOnInit(): void {}

  changePage(item: string) {
    this.showPage = item;
  }
  checkData() {
    this.router.navigateByUrl('admin');
  }

  onEmailChange(email: any) {
    // this.message = null;
    this.email = email;
  }

  onPasswordChange(password: any) {
    // this.message = null;
    this.password = password;
  }

  async signIn(){
    this.message = ''
    if(this.password.toString().trim().length >3 && this.email.toString().trim().length>3){
      try{
        console.log("we are going to send you to admin with : ","username: ",this.email, " password ; ",this.password);
        this.spinner.show();
        const res =  this.loginService.signinWith(this.email,this.password);
        // .finally((data)=>{
          // console.log("anything that is hrer")
          if(await res){
            var data = await res;
            console.log("data : ",data);
            localStorage.setItem("userAccess",JSON.stringify(data));
            console.log("item that is sa",JSON.stringify(data?.toString()))
            this.router.navigateByUrl('/admin');
          }
          this.spinner.hide();
          // await res.then((ele)=>[
          //   console.log("then : ")
          // ])
        //   console.log("inside data and then : ",data);
        // });
          // console.log("lfjal : ")
          
      }catch(error){
        this.spinner.hide();
        this.message = "incorrect email or password"
      }
      // console.log("result :",res);
    }else{
      console.log("message : ",this.message)
      if(this.password.trim().length ==0||this.email.trim().length ==0){
        this.message = "Please fill all fields";
        console.log("message 1 : ",this.message)
      }else{
        this.message = "must be greater than 3 characters";
        console.log("message 2 : ",this.message)
      }
      console.log(this.message)
    } 
  }
}
