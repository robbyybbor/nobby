import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-asincrone',
  templateUrl: './asincrone.page.html',
  styleUrls: ['./asincrone.page.scss'],
})
export class AsincronePage implements OnInit {

  private setIntervalId : any; /* creo una variabile per memorizzarci una funzione */

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    }

  public setTimeoutDouble(){
    setTimeout( /* setTimeout è una funzione asincrona che esegue un'altra funzione dopo un tot di secondi */
      this.funzione, /* funzione è invocata dopo 3 secondi con funzione dichiarata */
      3000
    );

    setTimeout(
      () => { /* funzione è invocata dopo 3 secondi con funzione usa e getta (lambda) */
        console.log('funzione setTimeout invocata tramite funzione lambda');
      },
      2000
    );
  }

  private funzione() {
    console.log('funzione invocata tramite funzione dichiarata')
  }

  public setTimeoutFor(){
    for (let i = 0; i < 10; i++) { /* setTimeout con ciclo FOR */
      setTimeout(
        () => {
        console.log(i, 'funzione setTimeout invocata tramite funzione lambda col ciclo FOR');
        },
      500 * i
      );
    }
  }

  public setIntervallo(){ /* setInterval è una funzione asincrona che esegue un'altra funzione ciclicamente */
    let indice: number = 0;
    this.setIntervalId = setInterval( /* uso la fuzione memorizzata come variabile, per stopparla con stopSetIntervalId*/
      (lambda) => {
        indice = indice + 1;
        console.log('funzione setInterval invocata ogni 1 secondo -', indice, 'volta')
      }, 1000
    )
  }

  public stopSetInterval1() {
    clearTimeout(this.setIntervalId);
    /* clearInterval(this.setIntervalId); fa lo stesso di clearTimeout */
  }

  async showLoading3sec() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });
    loading.present();
  }

  async showLoadingInfinite() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing ...'
    });
    loading.present();
  }

  /* crea due processi in parallelo e il secondo interrompe il primo */
  async showLoadingInterrupted() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing ...'
    });
    loading.present();
    console.log('Caricamento avviato');

    setTimeout(
      () => {
        console.log('Caricamento si sta interrompendo dopo 4 secondi');
        loading.dismiss().then( /* in questo modo uso la PROMISE - CALLBACK con THEN e con il CATCH */
          () => {
            console.log('Caricamente interroto');
          },
          () => {
            console.log('Richiesta rifiutata');
          }
        ).catch(
          () => {
            console.log('Qualcosa è andato storto');
          }
        );
      },
      4000
    );
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  /* creo una funzione PROMISE con meccanismo CALLBACK */
  /*  mi restituisce un doppio risultato: nel caso risolve e nel caso rigetta (manca il CATCH)*/
  funzionePromise(val: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      if (val) {
        console.log('Hai messo true, quindi ho resolve');
        resolve('true -> resolve'); /* sarebbe come return 'stringa' */
      } else { /* questa parte è facoltativa e serve per gestire le eccezioni */
        console.warn('Hai messo false, quindi ho reject');
        reject('false -> reject');
      }
    }   
   );
  }

  /* uso la funzione PROMISE con meccanismo CALLBACK, infatti viene eseguito */
  /* per prima cosa 'prima istruzione' e poi col .then la funzione */
  applicaTrue(){
    let promise = this.funzionePromise(true);
    promise.then(
      (result) => {
        console.log(result)
      }, (error) => {
        console.warn(error)
      }
      )
    console.log('Prima istruzione');
  } 
  /* uso la funzione PROMISE con meccanismo CALLBACK, caso rigettato */
  applicaFalse(){
    let promise = this.funzionePromise(false);
    promise.then(
      (result) => {
        console.log(result)
      }, (error) => {
        console.warn(error)
      }
      )
    console.log('Prima istruzione');
  }
  
  async funzioneAsincrona() {
    let res: any;
    res = await this.funzionePromise(true);
    console.log('prima istruzione');
    console.log(res)
  }

  async funzioneAsincrona2() {
    let res: any;
    res = await this.funzionePromise(false);
    console.log('poi istruzione');
    console.log(res)
  }

  funzioee(){
    this.funzioneAsincrona2()
    this.funzioneAsincrona()
  }

  async funzioneAsincronaFetch() {
    try {
      let data = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      let json = await data.json();
      console.log(json);
    } catch (errore) {
      console.log('errore del tipo', errore)
    }  
    console.log('prima istruzione');
  }
 

}
