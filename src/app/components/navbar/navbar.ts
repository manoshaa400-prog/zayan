import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
 import { ElementRef, Renderer2, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class navbar {
    toggleMenu = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

@HostListener('window:scroll')
onScroll() {
  if (window.scrollY > 10) {
    this.renderer.addClass(this.el.nativeElement, 'scrolled');
  } else {
    this.renderer.removeClass(this.el.nativeElement, 'scrolled');
  }
}
}