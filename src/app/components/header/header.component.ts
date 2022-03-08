import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang = ['English','Deutsch']
  option: string = "";
  constructor() { }

  ngOnInit(): void {}
 
  //Toggle language option
  onClick(option: string){
    this.option = option
  }

}
