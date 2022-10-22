import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pokemn',
  templateUrl: './lista-pokemn.page.html',
  styleUrls: ['./lista-pokemn.page.scss'],
})
export class ListaPokemnPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  items = [];

  ngOnInit() {
    this.init();
  }

  async load() {
    try {
      console.log('Avvio la chiamata fetch()');
      const data = await fetch(
        'http://localhost:3000/pokemon' /* pokemon è il primo id: "pokemon": ... */
      );
      await this.aspetta(1000);
      this.items = await data.json();
      console.log(this.items);
    } catch (err) {
      console.warn('Errore', err);
    }
  }

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

  doRefresh(event) {
    this.load().then(
      () => {
        event.target.complete();
      }
    );
  }

  showLoading() {
    this.loadingCtrl
      .create({
        message: 'Loading...',
      })
      .then((loading) => {
        loading.present().then(() => console.log('Loader caricato!'));
      });
  }

  async init() {
    this.showLoading();
    this.load().then(
      () => { this.loadingCtrl
        .dismiss()
        .then();}
    );
  }

}
