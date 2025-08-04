import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {

  let router=inject(Router)

  if(localStorage.getItem("application"))
  {
       return true;
  }
  router.navigate(["/login"]);
  return false;
};
