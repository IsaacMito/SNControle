import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tabs = ["Colaborador", "Fornecedor"];
  activeTab = this.tabs[0];

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  entrar(): void {
    this.router.navigateByUrl("meu-espaco")
  }

}
