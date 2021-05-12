import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Exos1Component } from './components/exos/exos1/exos1.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { PowPipe } from './components/demo/demo6/pow.pipe';
import { Exos2Component } from './components/exos/exos2/exos2.component';
import { TimeConverterPipe } from './components/exos/exos2/time-converter.pipe';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Exos3Component } from './components/exos/exos3/exos3.component';
import { CalculateTVAPipe } from './components/exos/exos3/calculate-tva.pipe';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { HighlightDirective } from './components/demo/demo9/highlight.directive';
import { RenderEventDirective } from './components/demo/demo9/render-event.directive';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { LoginService } from './components/demo/demo10/login.service';
import { FibonacciService } from './components/exos/exos1/fibonacci.service';
import { FibonacciPrivateService } from './components/exos/exos1/fibonacci-private.service';
import { TimeService } from './components/exos/exos2/time.service';
import { CardService } from './components/exos/exos3/card.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    HeaderComponent,
    Exos1Component,
    Demo5Component,
    Demo6Component,
    PowPipe,
    Exos2Component,
    TimeConverterPipe,
    Demo7Component,
    Exos3Component,
    CalculateTVAPipe,
    Demo8Component,
    Demo9Component,
    HighlightDirective,
    RenderEventDirective,
    Demo10Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    FibonacciService,
    FibonacciPrivateService,
    TimeService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
