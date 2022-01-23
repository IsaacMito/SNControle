import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/view/login/login.component';
import { MeuEspacoComponent } from './components/view/meu-espaco/meu-espaco.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "meu-espaco",
    component: MeuEspacoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
