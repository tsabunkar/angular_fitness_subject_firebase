import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

// !Intercepting Response from recieved from Server to Client
// !This will only intercept HTTP request or response not the firebase request or response
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(

      tap(result => console.log('HTTP_INTERCEPTOR', result)),

      catchError((error: HttpErrorResponse) => {
        console.log('Im from error -httpinterceptor', error);
        // !Error handling logic here

        let errorMessage = 'Error !!';
        if (error.error.message.message) {
          errorMessage = error.error.message.message;
        } else if (error.error.message) {
          errorMessage = error.error.message;
        } else if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = 'Unkown Error Occurred !!';
        }
        // *Show SNackbar-> About error occured
        this.snackBar.open(errorMessage, null, { duration: 3000 });

        return throwError(error); // this will generate a new Observable, in which we can pass the error
      })

    );
  }
}
