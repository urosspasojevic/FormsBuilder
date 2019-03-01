import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from '../../../../node_modules/rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${environment.url}/${req.url}`
    });
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error);
        })) as any;
  }
}
