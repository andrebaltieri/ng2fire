import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public item: FirebaseObjectObservable<any>;
  public items: FirebaseListObservable<any>;

  queryList = this.af.database.list('/messages', {
    query: {
      limitToLast: 10,
      orderByKey: true
    }
  });

  constructor(public af: AngularFire) {
    this.item = af.database.object('/item');
    this.items = af.database.list('/messages');
  }

  save(newName: string) {
    this.item.set({ name: newName });
    console.log(this.item);
  }

  update(newSize: string) {
    this.item.update({ size: newSize });
    console.log(this.item);
  }

  delete() {
    this.item.remove();
    console.log(this.item);
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
}
