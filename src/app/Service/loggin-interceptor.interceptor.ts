import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogginInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = 'JioMeet'
    request = request.clone({
      setHeaders: {
        'api-key': apiKey,
        'jwtToken' : "xxxxx.yyyyy.zzzzz"
      },
      
    })
    return next.handle(request);
  }
}
