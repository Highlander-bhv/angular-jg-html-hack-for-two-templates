import { Component, OnInit } from '@angular/core';
import {Component3Component} from "../component3.component";

@Component({
  selector: 'app-component3-ADD',
  templateUrl: './component3-add.component.html',
  styleUrls: ['./component3-add.component.sass']
})


//extends Component3plusComponent

export class Component3AddComponent extends Component3Component implements OnInit   {

  constructor() {
      super();
  }

   override ngOnInit(): void {

  }




}
