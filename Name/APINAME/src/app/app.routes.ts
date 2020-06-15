import { Routes, RouterModule } from '@angular/router';

import  { HomeComponent } from './../app/components/home/home.component';
import { UniversosComponent } from "./components/universos/universos.component"
    



const routes: Routes =[
{path: 'home', component: HomeComponent},
{path: 'universos', component: UniversosComponent},
{path: '**', redirectTo:"home"},


];

export const SUPERHERO = RouterModule.forRoot(routes);