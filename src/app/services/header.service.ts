import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private subjTitle = new Subject<string>();
  title$ = this.subjTitle.asObservable();

  constructor() { }

  setTitle(str: string): void {

    this.subjTitle.next(str);
  }
}
