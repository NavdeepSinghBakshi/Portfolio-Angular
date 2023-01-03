import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  downloadCV() {
    console.log('12')
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
