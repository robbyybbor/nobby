import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemn',
  templateUrl: './lista-pokemn.page.html',
  styleUrls: ['./lista-pokemn.page.scss'],
})
export class ListaPokemnPage implements OnInit {

  constructor() { }

  items = [];

  ngOnInit() {
    this.load();
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
}
