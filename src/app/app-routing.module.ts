import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PakagesComponent } from './pakages/pakages.component';
import { EventbookComponent } from './eventbook/eventbook.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'pakages', component: PakagesComponent },
      { path: 'eventbook', component: EventbookComponent },
      { path: 'payment', component: PaymentComponent },
      { path: '', component: PakagesComponent },

    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
