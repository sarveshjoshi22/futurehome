import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { CommonModule }         from '@angular/common';
import { HttpModule }           from '@angular/http';

// Import Component
import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

// Import Service
import { APP_CONFIG, OPAQUE_TOKEN } from './app.config';
import { DataService } from './service/data.service';

// Import Module
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    AppRoutingModule
    // ....
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    DataService,
    {provide: OPAQUE_TOKEN, useValue: APP_CONFIG}, // provide for global variables
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule { }
