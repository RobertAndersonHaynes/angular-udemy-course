import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
  userName = "";

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.userName = ""
  }
}
