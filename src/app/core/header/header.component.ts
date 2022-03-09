import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang = ['English','Deutsch']
  option: string = "";
  constructor(private route:Router) { }

  ngOnInit(): void {}
 
  //Toggle language option
  onClick(option: string){
    this.option = option
  }

  onlogout(){
this.route.navigate(['/', 'login']);
  }

}
