import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private router: Router){}

  arrayPersone: Persona[];

  varNome: string = "";
  varPsw: string = "";
  varBool: boolean;
  showPsw: boolean = true;
  varType: string = "text";
  varIcon: string = "eye-off-outline";
  myArray: string[] = ['prim_Elem', 'second_Elem', 'terzo_EL'];


  ngOnInit() {
    console.log(this.myArray);

    for (let i = 0; i < this.myArray.length; i++) { /* Primo tipo di FOR */
      console.log(this.myArray[i], 'primo metodo FOR');
    }

    for (let valore of this.myArray){ /* Secondo tipo di FOR */
      console.log(valore, 'secondo metodo FOR');
    }

    let iterabile =this.myArray.values() /* Terzo tipo di FOR */
    for (let i of iterabile){
      console.log(i, 'terzo metodo FOR');
    }

    this.myArray.forEach(
      elemento =>{
        console.log(elemento, 'quarto metodo FOR');
      }
    )
    
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
