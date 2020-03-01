import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './componentes/topo.component';
import { BotaoComponent } from './componentes/botao.component';
import { RodapeComponent } from './componentes/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    BotaoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
