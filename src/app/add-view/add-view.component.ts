import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})
export class AddViewComponent {

  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Player1', done: true },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  

}
