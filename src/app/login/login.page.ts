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
    let fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    
/*  fetchPromise è una funzione con "promessa - promise", cioè viene mandata in esecuzione,
    il codice procede, senza aspettare che fetchPromise finisce;
    quando fetchPromise finisce, se la risposta è ok allora si esegue la funzione (response) => {...}
    altrimenti si esegue la funzione (rejected) => {...} */
    
    console.log(fetchPromise);
    fetchPromise.then(
      (response) => {
        console.log(`Risposta ricevuta: ${response.status}`); /* sto usando il backtip ` per unire parole e funzione */
        response.json().then(
          (responseJson) => {
            console.log('Indirizzo contiene:');
            console.log(responseJson);
          }
        )
      },
      (rejected) => {
        console.log(rejected);
      }
    );

    console.log('Richiesta inviata');
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
