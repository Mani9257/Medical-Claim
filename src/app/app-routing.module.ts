import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RequestClaimComponent } from './request-claim/request-claim.component';
import {ClaimStatusComponent } from './claim-status/claim-status.component';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
const routes: Routes = [{
  path: '',
  redirectTo: 'login', pathMatch: 'full'
 } , {
  path: 'login', component: LoginComponent
} , { 
  path: 'home', component: HomeComponent
}
, {
  path: 'request', component: RequestClaimComponent
 }, {
  path: 'claim', component: ClaimStatusComponent
 }, {
  path:' admin', component: AdminapprovalComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
