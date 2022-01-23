import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-meu-espaco',
  templateUrl: './meu-espaco.component.html',
  styleUrls: ['./meu-espaco.component.scss']
})
export class MeuEspacoComponent implements OnInit {

  constructor(private headerService:HeaderService, private router:Router) { }

  ngOnInit(): void {
    this.headerService.setTitle("Meu espaço");
  }

  modulos():void {
    this.router.navigateByUrl("modulos");
  }
}
