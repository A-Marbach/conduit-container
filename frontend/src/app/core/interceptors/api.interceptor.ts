import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Füge /api nur hinzu, falls es noch nicht im req.url enthalten ist
    const url = req.url.startsWith("/api") ? req.url : `/api${req.url}`;
    const apiReq = req.clone({ url: `${environment.apiUrl}${url}` });
    return next.handle(apiReq);
  }
}
