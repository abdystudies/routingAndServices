import { Component } from '@angular/core';
import { Studente } from '../studente/studente';
import { CommonModule } from '@angular/common';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina3',
  imports: [CommonModule, Studente],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  studenti: any[] = [];

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
  }
}