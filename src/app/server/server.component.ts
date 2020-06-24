import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
  userName = "";
  //allowClick = false;

  constructor() { }

  ngOnInit(): void {
  }
  // setClick() {
  //   if (this.userName != "") {
  //     this.allowClick = true
  //   }
  // }
  onButtonClick() {
    this.userName = ""
  }
}
