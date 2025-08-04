import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let token=localStorage.getItem('application')

  if(token!=null)
  {
     let cloneequest=req.clone({
    headers:req.headers.set('token',token)
   })
   return next(cloneequest)
  }
  
  return next(req);
};
