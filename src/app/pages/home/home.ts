import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-home',
     
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class home { 
  backgroundhome = 'assets/home-bg.jpeg';
  ripples: { x: number, y: number }[] = [];

ripple(event: MouseEvent) {
  const rect = (event.target as HTMLElement).getBoundingClientRect(); 
  this.ripples.push({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  });

  setTimeout(() => {
    this.ripples.shift();
  }, 1000);
}
}
