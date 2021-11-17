import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  public menuIteams=[
    {
      name: 'Home',
      link:'/home'
    },
    {
      name: 'about',
      link:'/about'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
