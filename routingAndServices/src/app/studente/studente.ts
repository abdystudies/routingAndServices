import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-studente',
  imports: [CommonModule],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {
  studenti: any[] = [];

  constructor(private studentiService: StudentiService) {}
  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
  }
  @Input() nome!: any;
  @Input() classe!: any;
  @Input() mediaVoti!: any;

  visible = true;
  toggleMediaVoti() {
    this.visible = !this.visible;
  }
}
