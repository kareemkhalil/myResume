import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-to',
  templateUrl: './redirect-to.component.html',
  styleUrls: ['./redirect-to.component.css']
})
export class RedirectToComponent implements OnInit {

  constructor() { }

  arabicLang(){
    window.location.href = '/index-rtl.html';
  }
  handleClick(event: Event) {
    console.log('Click!', event)
  }



  ngOnInit() {
  }

}
