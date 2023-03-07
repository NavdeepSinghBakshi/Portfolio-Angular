import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startDate = new Date("june 23, 2021 00:00:00").getTime();
  expDate : string = '';
  constructor(private router: Router) { }

  ngOnInit(){
    this.experienceTime();
  }
  experienceTime(){
      var now = new Date().getTime();
      var distance = now - this.startDate;
      var days = Math.floor(distance/(1000*60*60*24));
      var years = Math.floor(days / 365);
      var months = Math.ceil((days-years*365)/30);
    //  var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60*24));
    //  var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    //  var seconds = Math.floor((distance % (1000*60)) / 1000);
      this.expDate = years + "y " + months + "m";
  }
  downloadCV() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/resume/Navdeep.pdf';
    link.download = "Navdeep_CV";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  readMore() {
    this.router.navigate(['/my-intro']);
  }
  contact() {
    this.router.navigate(['/contact']);
  }
}
