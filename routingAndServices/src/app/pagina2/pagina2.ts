import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentiService } from '../services/studenti-service';

class Studenti {
  id: number;
  nome: string;
  classe: string;
  mediaVoti: number;

  constructor(id: number, nome: string, classe: string, mediaVoti: number) {
    this.id = id;
    this.nome = nome;
    this.classe = classe;
    this.mediaVoti = mediaVoti;
  }
}

@Component({
  selector: 'app-pagina2',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {

  studenti: any[] = [];

  // campi del form per il nuovo studente
  newStudentNome: string = '';
  newStudentClasse: string = '';
  newStudentMediaVoti: number | null = null;

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    const raw = this.studentiService.getStudenti() || [];
    this.studenti = (raw as any[]).map((r: any, idx: number) => {
      if (typeof r === 'string') {
        return new Studenti(idx + 1, r, '', 0);
      }
      return new Studenti(
        r.id ?? (idx + 1),
        r.nome ?? '',
        r.classe ?? '',
        Number(r.mediaVoti) || 0
      );
    });
  }

  private getNextId(): number {
    return this.studenti.length ? Math.max(...this.studenti.map(s => s.id)) + 1 : 1;
  }

addStudent() {
    const nome = this.newStudentNome.trim();
    if (!nome) return;

    const classe = this.newStudentClasse.trim();
    const media = Number(this.newStudentMediaVoti) || 0;

    const s = new Studenti(this.getNextId(), nome, classe, media);
    this.studenti.push(s);

    // reset form
    this.newStudentNome = '';
    this.newStudentClasse = '';
    this.newStudentMediaVoti = null;
  }

  removeStudent(index: number) {
    if (index >= 0 && index < this.studenti.length) {
      this.studenti.splice(index, 1);
    }
  }
}

