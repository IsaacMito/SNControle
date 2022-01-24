import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tabs = ["Colaborador", "Fornecedor"];
  activeTab = this.tabs[0];
  error:string = "";

  checkoutForm = this.formBuilder.group({
    usuario: '',
    senha: ''
  });

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  validaTela():boolean{

    if(this.checkoutForm.controls["usuario"].invalid && this.checkoutForm.controls["senha"].invalid) {
      this.checkoutForm.markAllAsTouched();
      return false;
    }

    if(this.checkoutForm.controls["usuario"].invalid) {
      this.checkoutForm.controls["usuario"].markAsTouched();
      return false;
    }

    if(this.checkoutForm.controls["senha"].invalid) {
      this.checkoutForm.controls["senha"].markAsTouched();
      return false;
    }

    return true;
  }

  entrar(): void {
    console.log(this.activeTab)

    if(this.validaTela()) {
      if (this.checkoutForm.value.usuario == 1 && this.checkoutForm.value.senha == "Digala123") {
        this.router.navigateByUrl("meu-espaco")
      } else {
        this.error = "Úsuario não encontrado"
      }
    }
  }

}
