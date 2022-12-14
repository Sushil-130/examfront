import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./pages/signup/signup.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {
}
