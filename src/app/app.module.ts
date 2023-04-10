import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PDirective } from './app/p.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [AppComponent, PDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }