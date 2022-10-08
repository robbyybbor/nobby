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

  persona1: Persona;
  
  myArray: string[] = ['prim_Elem', 'econd_Elem', 'zo_EL']; /* I modo per dichiarare e inizializzare un array */
  myArray2 = ['prim_Elem', 'econd_Elem', 'zo_EL']; /* II modo per dichiarare e inizializzare un array GENERICAMENTE */
  myArray3 = Array(); /* III modo per dichiarare un array GENERICAMENTE, poi si usa PUSH e POP */
  myArray4 = []; /* IV modo per dichiarare un array GENERICAMENTE */

  ngOnInit() {

    let myArray_inside = [] /* V modo per dichiarare un array GENERICAMENTE */
    myArray_inside.push('ciao');
    myArray_inside.push(1);
    console.log('myArray_inside:', myArray_inside);

    console.log('myArray:', this.myArray);

    this.persona1 = { /* inizializzo l'oggetto persona1 */
      name: 'eta',
      surname: 'eta',
      age: 12
    }
    
    this.myArray3.push('ciao');
    this.myArray3.push(2);
    this.myArray3.push(this.persona1);
    console.log('myArray3:', this.myArray3);

    let ordinato = [...this.myArray].sort(); /* con [... ] mi crea una copia altrimenti sort sovrascrive */
    console.log('myArray ordinato:', ordinato); /* [... ] è lo SPREAD OPERATOR */

    console.log(this.myArray.concat('concatenazione array', ['poi1', '4tr']));

    console.log('trova parole che hanno o come seconda lettera:', this.myArray.filter(
      item => item.indexOf('o') === 1 /* mi trova la parola che ha la seconda lettera = o */
        )
    )

    console.log('trova parola cha hanno o da seconda lettera o:', this.myArray.filter(
      item => item.indexOf('o') >= 1 /* mi trova le parole che dalla seconda lettera hanno o */
        )
    )
    
    console.log('stampa parola uguale a zo_EL:', this.myArray.find(
      item => item.indexOf('zo_EL') === 0
      )
    )

  console.log('stampa indice di parola uguale a zo_EL:', this.myArray.findIndex(
    item => item.indexOf('zo_EL') === 0
    )
  )

  console.log('unisce gli elementi con -:', this.myArray.join('-'));

  this.myArray.unshift('nuovEl');
  console.log('aggiunge un elemento:', this.myArray);
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
