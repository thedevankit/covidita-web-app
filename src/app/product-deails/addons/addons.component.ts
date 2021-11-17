import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.scss']
})
export class AddonsComponent implements OnInit {
  products = new Array(4);
  constructor() { }

  ngOnInit(): void {
  }

}
