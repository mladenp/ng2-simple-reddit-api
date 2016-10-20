// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// 3rd Party

// Custom
import { rAPIService } from './reddit.service';
import { AppComponent }  from './app.component';
import { ImagesComponent } from './images/images.component';
import { SingleImageComponent } from './single-image/singleImage.component';
import { routing } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ImagesComponent,
    SingleImageComponent
  ],
  providers: [ rAPIService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
