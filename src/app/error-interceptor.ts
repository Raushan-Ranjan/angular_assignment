import { ErrorComponent } from './character/error/error.component';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

     constructor(private dialog : MatDialog){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
           catchError((error:HttpErrorResponse) =>{
            let  errorMessage = "Internal error Occured";
            if(error.error.message){
              errorMessage = error.error.message;
            }
               this.dialog.open(ErrorComponent,{data:{message : errorMessage}});
               return throwError(error);

           })
       )
    }

}