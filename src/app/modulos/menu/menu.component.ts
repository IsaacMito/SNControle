import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle("Modulos do Sistema")
  }

}
