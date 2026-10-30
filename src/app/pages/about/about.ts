import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({ 
  selector: 'app-about',
    standalone: true,  
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

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
