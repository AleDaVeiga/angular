import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GatosComponent } from './gatos/gatos.component';
import { KeyInterceptor } from './interceptors/key-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriasComponent,
    GatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
