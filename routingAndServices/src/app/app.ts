import { Component, signal } from '@angular/core';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { Pagina3 } from './pagina3/pagina3';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Pagina1, Pagina2, Pagina3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('routingAndServices');
}
