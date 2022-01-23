import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-meu-espaco',
  templateUrl: './meu-espaco.component.html',
  styleUrls: ['./meu-espaco.component.scss']
})
export class MeuEspacoComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle("Meu espaço")
  }

}
