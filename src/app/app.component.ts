import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  count: number = 0;
  log: number[] = [];
  showOrHide: boolean = false;

  onClick() {
    this.showOrHide = !this.showOrHide;
    this.count++;
    this.log.push(this.count);
  }
}
