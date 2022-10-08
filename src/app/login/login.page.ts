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

  varNome: string = "";
  varPsw: string = "";
  varBool: boolean;
  showPsw: boolean = true;
  varType: string = "text";
  varIcon: string = "eye-off-outline";

  ngOnInit() {
    let arrayObj = [];
    arrayObj.push({
      nome: 'anakin', 
      cognome: 'skywalker',
      anni: 100
    });
    arrayObj.push({nome: 'obi', cognome: 'kenobi', anni: 60});
    arrayObj.push({nome: 'yoda', cognome: 'mando', anni: 150,});

    console.log('arrayObj:', arrayObj);

    let arrayObjSortedFake = [...arrayObj].sort(); /* non ordina l'array di oggetti in base a anni */
    console.log('arrayObjSortedFake (non ordina!):', arrayObjSortedFake);

    let compareFn = /* crea una variabile che è una funziona da passare a sort */
      (a, b) => { 
      if (a.anni > b.anni) return 1;
      if (a.anni < b.anni) return -1;
      return 0;
      }

    let arrayObjSorted = [...arrayObj].sort(compareFn); /* adesso ordina l'array di oggetti in base a anni*/
    console.log('arrayObjSorted (ordinato!):', arrayObjSorted);


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
