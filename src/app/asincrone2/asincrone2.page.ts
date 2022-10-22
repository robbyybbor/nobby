import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrone2',
  templateUrl: './asincrone2.page.html',
  styleUrls: ['./asincrone2.page.scss'],
})
export class Asincrone2Page implements OnInit {

  constructor() { }

  async ngOnInit() {

    console.log('INIZIO');

    /* chiamo direttamente funzioneAsincrona e */
    /* la funzione si esegue in parallelo (in modo asincrono)*/
    /* ma se matto AWAIT la funzione non è asincrona */
    console.log('Prima chiamata');
    /* await */ this.funzioneAsincrona(-5, 3000);

    /* con ASYNC - AWAIT posso chiamare direttamente la funzione PROMISE */
    /* però in questo modo la funzione PROMISE non si esegue in modo asincrono */
    console.log('Seconda chiamata');
    let risultato = await this.funzione_Promise_X2(20);
    console.log ('2) Il doppio è:', risultato);

    /* metodo alternativo per con THEN (il THEN del DESTINO) per chiamare la funzione PROMISE */
    /* in questo modo la funzione PROMISE gira in parallelo (asincrona) */
    /* ma se matto AWAIT la funzione non è asincrona */
    console.log('Terza chiamata');
    /* await */ this.funzione_Promise_X2(100).then(
      (doppio) => console.log('3) Il doppio è', doppio),
      (errore) => console.warn('3) Il numero è negativo, codice errore: ' + errore)
    )

    console.log('FINE');
  };

  
  /* mi creo una funzione con PROMISE che NON VUOL DIRE CHE E' ASINCRONA !!! */
  private funzione_Promise_X2(input: number): Promise<number> {
    console.log('Sono nella funzione PROMISE...');
    let output = input * 2;

    return new Promise(
      (resolve, reject) => { /* la parte con REJECT è facoltativa */
        if (input > 0) {
          resolve(output);
        } else {
          reject(-1);
        }
      }
    );
  }

  /* creo una funzione PROMISE che pausa per un tot di millisec */
  aspetta(timeout: number) {
    return new Promise<void>(
      (resolve) => {
        setTimeout(
          () => {
            console.log('Ho finisto di aspettare');
            resolve();
          }, timeout
        );
      }
    );
  }

  /* mi creo una funzione ASINCRONA con ASYNC - AWAIT */
  /* in questo modo una funzione PROMISE diventa ASINCRONA */
  private async funzioneAsincrona(input: number, durata: number) {
    await this.aspetta(durata);
    try {
      let doppio = await this.funzione_Promise_X2(input);
      console.log ('1) Il doppio è ' + doppio);
     } catch (errore) {
      console.warn('1) Il numero è negativo, codice errore:' + errore);
     }
  }


}
