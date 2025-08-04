import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';

export const noAuthGardsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  if(component instanceof SignUpComponent || component instanceof LoginComponent)
  {
       return component.candeactivate();
   
  }
  return true;
};
