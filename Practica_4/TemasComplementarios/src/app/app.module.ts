import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CheckExistImagePipe } from './components/pipes/check-exist-image.pipe';
import { CambiarContrasenaPipe } from './components/pipes/cambiar-contrasena.pipe';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { RandomColorDirective } from './componen/ts/directivas/random-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CheckExistImagePipe,
    CambiarContrasenaPipe,
    NgSwitchComponent,
    RandomColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
