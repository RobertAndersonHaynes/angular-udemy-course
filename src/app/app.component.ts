import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .clicks {
      color: white;
    }
  `]
})
export class AppComponent {
  detailsClicked = false;
  x = 1
  clickLog = [];

  onDetailsButtonClick() {
    this.detailsClicked = !this.detailsClicked
    this.clickLog.push(this.x);
    this.x++
  }

  // getColor() {
  //   return this.clickLog.length < 5 ? 'white' : 'blue'
  // }
}
