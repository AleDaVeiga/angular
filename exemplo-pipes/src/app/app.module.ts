import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { ExponencialPipe } from './pipes/exponencial.pipe';
import { MoedaPipe } from './pipes/moeda.pipe';

registerLocaleData(pt)

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ExponencialPipe,
    MoedaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
