import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private router: Router){}

  varNome: string = "";
  varPsw: string = "";
  varBool: boolean;
  showPsw: boolean = true;
  varType: string = "text";
  varIcon: string = "eye-off-outline";

  ngOnInit() {
  }

  logMe(){
    console.log(this)
  }

  funzioneCheck(){
    if ((this.varNome === 'nome') && (this.varPsw === "pas")) {
      console.log('Dati corretti!')
      this.varBool = true;
      this.router.navigate(['/home']);
    } else {
      console.log('Dati errati! La password inserità è:', this.varPsw)
      this.varBool = false;
    }
  }

  toggleShowPsw(){
    if (this.varType === "text") {
      this.varType = "password";
    } else {
      this.varType = "text";
    }

    if(this.varIcon === "eye-off-outline") {
      this.varIcon = "eye-outline";
    } else {
      this.varIcon = "eye-off-outline";
    }
  }
  

}
