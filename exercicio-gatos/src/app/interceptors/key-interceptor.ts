import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* A requisição é imutavel, ou seja, não da para altera-la.
        Entao é necessario criar um clone para setar as informações */
        const reqNova = req.clone({ setHeaders: { 'x-api-key': 'DEMO-API-KEY' } });
        return next.handle(reqNova);
    }
}