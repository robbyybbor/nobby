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
      console.log('Dati errati!')
      this.varBool = false;
    }
  }
  

}
