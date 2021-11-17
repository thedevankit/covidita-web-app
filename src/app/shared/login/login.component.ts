import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  login(){
      this.closeLoginNav();
  }
  ngOnInit() {
  }
  signupEnable (){
   //this.helperService.enableAccount.next('signup');
  }
  closeLoginNav(){
    this.helperService.loginSideNav.next(false);
  }
}
