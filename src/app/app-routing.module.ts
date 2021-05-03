import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Exos1Component } from './components/exos/exos1/exos1.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'demo', children : [
    { path : 'demo1', component : Demo1Component },
    { path : 'demo2', component : Demo2Component },
    { path : 'demo3', component : Demo3Component },
    { path : 'demo4', component : Demo4Component },
  ] },

  { path : "exos", children : [
    { path : 'exos1', component : Exos1Component}
  ]},

  { path : "**", component : Demo4Component}
  //{ path : "**", redirectTo : "demo/demo4"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
