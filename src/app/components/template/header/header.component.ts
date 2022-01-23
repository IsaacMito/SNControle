import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = "";
  enable:boolean = false;

  constructor(private headerService:HeaderService, private router:Router) {
    headerService.title$.subscribe(title => {
      this.title = title;
      this.enable = true;
    });
   }

  ngOnInit(): void {
  }

  sair() :void {
    this.router.navigateByUrl("");
    this.title = "";
    this.enable = false;
  }
}
