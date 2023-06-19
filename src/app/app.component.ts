import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-adopet';
  body: string = '';

  constructor(private location: Location){}

  ngOnInit(): void {
    this.location.onUrlChange(x => {
      if(x == '/') {
        this.body = 'home';
      }
      if(x == '/signin' || x == '/signup') {
        this.body = 'sign';
      }
      if(x == '/pets' || x == '/message' || x == '/profile') {
        this.body = 'pets';
      }
    })
  }
}
