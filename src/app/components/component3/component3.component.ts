import {Component, OnInit} from '@angular/core';

@Component({
               selector: 'app-component3',
               // templateUrl: './component3plus.component.html',
               templateUrl: '../../HTMLtemp/template.html',
               styleUrls  : ['./component3.component.sass']
           })
export class Component3Component implements OnInit {
    ComponentCall = 'Component No.3'

    public variableList: any = [];

    vari1 = {name: 'Vari1 of component3'};
    vari2 = {name: 'Vari2 of component3'};
    vari3 = {name: 'Vari3 of component3'};
    vari4 = {name: 'Vari4 of component3'};

    constructor() { }

    ngOnInit(): void {
        this.variableList.push(
            "'../../HTMLtemp/template.html'",
            this.vari1,
            this.vari2,
            this.vari3,
        )






    }


   foo1(){ this.vari4.name=this.vari4.name + '+1';
           this.vari4.name.length>45? this.vari4.name="vari4.." : null      }

}


