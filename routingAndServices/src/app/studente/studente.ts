import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studente',
  imports: [CommonModule],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {
  @Input() nome!: any;
  @Input() classe!: any;
  @Input() mediaVoti!: any;

  visible = true;
  toggleMediaVoti() {
    this.visible = !this.visible;
  }
}
