import { Component, signal } from '@angular/core'; 

import { navbar } from './components/navbar/navbar'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [ 
    navbar, 
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ZAYAN');
}