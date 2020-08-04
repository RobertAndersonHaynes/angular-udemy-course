import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startClicked = new EventEmitter<{count: number}>();
  @Output() endClicked = new EventEmitter<void>();
  public time: number = 0
  public clickInterval

  constructor() { }

  ngOnInit(): void {
  }

  onStartClick() {
    this.clickInterval = setInterval(() => {
      this.time++;
      this.startClicked.emit({count: this.time})
    }, 1000);
  };

  onEndClick() {
    clearInterval(this.clickInterval)
  };

};
