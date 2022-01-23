import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = "";
  enable:boolean = false;

  constructor(private headerService:HeaderService) {
    headerService.title$.subscribe(title => {
      this.title = title;
      this.enable = true;
    });
   }

  ngOnInit(): void {
  }

}
