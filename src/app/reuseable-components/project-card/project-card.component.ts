import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input('Project') Project : any;
  constructor() { }

  ngOnInit(): void {
  }
  readMore(){debugger
    var moreText = document.getElementById("more"+this.Project.id) as HTMLElement;
    var btnText = document.getElementById("readMoreBtn"+this.Project.id) as HTMLElement;
    if (moreText.style.display === "inline")
    {
      moreText.style.display = 'none';
      btnText.innerHTML = "Read more ...";
    }
    else{
      moreText.style.display = 'inline';
      btnText.innerHTML = "Read less";
    }
  }
}
