import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlansComponent } from './components/plans/plans.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-plans', component: PlansComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: '**', redirectTo: 'app-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
