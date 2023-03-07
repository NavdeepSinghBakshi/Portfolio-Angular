import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  log: boolean = true;
  onActive() {
    window.scroll(0, 0);
  }
  @HostListener('mousemove', ['$event'])
  loggingOut(event: any) {
    console.log(this.log)
    this.log = false;
  }
  ngOnInit() {
    setInterval(() => {
      if (this.log == false) {
        this.log = true;
      }
      else {
        alert("log out");
        this.log = true;
      }
    }, 1000*60*60)
  }

}
