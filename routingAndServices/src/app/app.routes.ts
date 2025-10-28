import { Routes } from '@angular/router';

import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { Pagina3 } from './pagina3/pagina3';

export const routes: Routes = [
    // se l'url è vuoto va su /pagina1
    {path: '', redirectTo: 'pagina1', pathMatch: 'full'},
    // se l'url è /pagina1 mostra il componente Pagina1
    { path: 'pagina1', component: Pagina1 },
    { path: 'pagina2', component: Pagina2 },
    { path: 'pagina3', component: Pagina3 },
];
