import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import { ModalComponent } from './modal/modal.component';

  
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'modal', component: ModalComponent},
  { path: '**', redirectTo: 'welcome'}
];
   


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
