import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  AnimationState : boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  pauseAnimation() {
    let s = document.getElementById('card') as HTMLElement
    s.style.animationPlayState = 'paused';
    this.AnimationState = false;
  }
  startAnimation() {
    let s = document.getElementById('card') as HTMLElement
    s.style.animationPlayState = 'running';
    this.AnimationState = true;
  }
}
