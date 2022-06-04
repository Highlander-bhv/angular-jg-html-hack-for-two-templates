import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Component1Component} from "./components/component1/component1.component";
import {Component2Component} from "./components/component2/component2.component";
import {Component3AddComponent} from "./components/component3/component3ADD/component3-add.component";




const routes: Routes = [

    {
        path     : 'comp1',
        component: Component1Component
    },

    {
        path     : 'comp2',
        component: Component2Component
    },

    {
        path     : 'comp3',
        component: Component3AddComponent
    }

];

@NgModule({
              imports: [RouterModule.forRoot(routes)],
              exports: [RouterModule]
          })
export class AppRoutingModule {
}
