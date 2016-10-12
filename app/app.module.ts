import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { rAPIService } from './reddit.service';
import { AppComponent }  from './app.component';
import { ImagesComponent } from './images/images.component';
import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent, ImagesComponent ],
  providers: [ rAPIService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
