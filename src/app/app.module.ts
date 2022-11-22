import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './admin/admin.component';
import { SafeHtmlPipe } from './compile.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'admin',component:AdminComponent}
  ])],
  declarations: [ AppComponent, HelloComponent, AdminComponent, SafeHtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
