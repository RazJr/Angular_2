import  { Routes, RouterModule } from '@angular/router';

const Rutas: Routes = [
    { path: '', component:HomeComponent },
    { path: 'smartphone', component:SmartPhonesComponent },
    { path: 'lineaBlanca', component:LineaBlancaComponent },
    { path: 'fotografa', component:FotografiaComponent },
    { path: 'notFound', component:NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

export const APP_ROUTES = RouterModule.forRoot(Rutas);