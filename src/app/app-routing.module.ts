import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { ViewCrudComponent } from './view-crud/view-crud.component';

import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthGuard } from './auth-login/auth.guard';
// import { UserCrudComponent } from './user-crud/user-crud.component';
// import { ViewCrudComponent } from './view-crud/view-crud.component';

const routes: Routes = [
  

  {path:'auth-login',component:AuthLoginComponent},
  {path:'login-with-google',component:LoginWithGoogleComponent},
  { path:'user-crud', 
  component:UserCrudComponent,
  canActivate: [AuthGuard]},
  {path:'view', component:ViewCrudComponent},
  {path:'login', component:AuthLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
