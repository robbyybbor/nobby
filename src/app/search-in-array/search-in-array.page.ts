import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-in-array',
  templateUrl: './search-in-array.page.html',
  styleUrls: ['./search-in-array.page.scss'],
})
export class SearchInArrayPage implements OnInit {

  query: string = '';
  shower: number = 2;
  items = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'primo', 'secondo', 'secondo', 'secondo', 'secondo'];
  filteredItems = [];
  lenghtFilteredItems: number;

  constructor() { }

  ngOnInit() {
  }

  public itemsFilter() {
    let queryLowerCase = this.query.toLowerCase();
    console.log('la stringa cercata è:', queryLowerCase);
    if (queryLowerCase != '') {
      this.filteredItems = this.items.filter(item => item === queryLowerCase);
      this.lenghtFilteredItems = this.filteredItems.length;
      this.filteredItems = this.filteredItems.slice(0, this.shower);
      console.log(this.filteredItems);
    }
  }

  public showMore() {
    this.shower = this.shower + 1;
    this.itemsFilter();
  }
}
