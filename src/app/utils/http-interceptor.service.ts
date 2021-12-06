import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {


  constructor(private  utilService: UtilService) {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
request = request.clone({
    setHeaders: {
        Authorization: `${this.utilService.getToken().tokenType} ${this.utilService.getToken().token}`,
        'Content-Type': 'application/json',
    }
});

return next.handle(request);
}
}
