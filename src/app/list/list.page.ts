import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; note: string; thumb: string, link: string }> = [];
  constructor() {
      this.items.push({
        title: 'I am the code ',
        note: 'Clique para saber mais',
        thumb: '/assets/iamthecode.jpg',
        link: 'http://www.iamthecode.org'
      });
      this.items.push({
        title: 'Plano de Menina',
        note: 'Clique para saber mais',
        thumb: '/assets/plano.png',
        link: 'https://planodemenina.com.br/'
      });
      this.items.push({
        title: 'Seda',
        note: 'Clique para saber mais',
        thumb: '/assets/seda.jpg',
        link: 'https://www.seda.com.br'
      });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
