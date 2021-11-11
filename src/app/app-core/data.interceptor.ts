import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonRefLinkService } from './json-ref-link.service';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  public constructor(private readonly jsonRefLinkService: JsonRefLinkService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const skipAutoComposeHeader = 'X-SkipAutoCompose';
    if (req.headers.has(skipAutoComposeHeader)) {
      const headers = req.headers.delete(skipAutoComposeHeader);
      req = req.clone({ headers });
      return next.handle(req);
    }

    const result = next.handle(req);
    return result.pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          const httpResponse = event as HttpResponse<any>;
          const contentType = httpResponse.headers.get(
            'content-type'
          ) as string;
          if (contentType && contentType.includes('application/json')) {
            return httpResponse.clone({
              body: this.jsonRefLinkService.link(httpResponse.body),
            });
          }
        }

        return event;
      })
    );
  }
}
