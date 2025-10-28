import { Component } from '@angular/core';
import { Studente } from '../studente/studente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina3',
  imports: [CommonModule, Studente],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  studenti = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];
}
