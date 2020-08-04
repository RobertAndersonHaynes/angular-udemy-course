import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public even: number[] = [];
  public odd: number[] = [];

  onStartClicked(counter: {count: number}) {
    (counter.count % 2 === 0) ? this.even.push(counter.count) : this.odd.push(counter.count);
    }

  onEndClicked() {

  };
};
