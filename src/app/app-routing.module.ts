import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';
import { Demo12Component } from './components/demo/demo12/demo12.component';
import { Demo13Component } from './components/demo/demo13/demo13.component';
import { AdminGuardGuard } from './components/demo/demo14/admin-guard.guard';
import { Demo14Component } from './components/demo/demo14/demo14.component';
import { Demo14demiComponent } from './components/demo/demo14/demo14demi/demo14demi.component';
import { GuardLoginService } from './components/demo/demo14/guard-login.service';
import { Demo15Component } from './components/demo/demo15/demo15.component';
import { Demo16Component } from './components/demo/demo16/demo16.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Exos1Component } from './components/exos/exos1/exos1.component';
import { Exos2Component } from './components/exos/exos2/exos2.component';
import { Exos3Component } from './components/exos/exos3/exos3.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'demo', children : [
    { path : 'demo1', component : Demo1Component },
    { path : 'demo2', component : Demo2Component },
    { path : 'demo3', component : Demo3Component },
    { path : 'demo4', component : Demo4Component },
    { path : 'demo5', component : Demo5Component },
    { path : 'demo6', component : Demo6Component },
    { path : 'demo7', component : Demo7Component },
    { path : 'demo8', component : Demo8Component },
    { path : 'demo9', component : Demo9Component },
    { path : 'demo10', component : Demo10Component },
    { path : 'demo11', component : Demo11Component },
    { path : 'demo12', component : Demo12Component },
    { path : 'demo13', component : Demo13Component },
    { path : 'demo14', component : Demo14Component },
    { path : 'demo14_5', component : Demo14demiComponent, canActivate : [AdminGuardGuard] },
    { path : 'demo15', component : Demo15Component },
    { path : 'demo16', component : Demo16Component },

  ] },

  { path : "exos", children : [
    { path : 'exos1', component : Exos1Component},
    { path : 'exos2', component : Exos2Component},
    { path : 'exos3', component : Exos3Component}
  ]},


  { path : "**", component : Demo4Component}
  //{ path : "**", redirectTo : "demo/demo4"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
