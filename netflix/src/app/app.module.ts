import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixHeaderComponent } from './components/netflix-header/netflix-header.component';
import { NetflixIndexComponent } from './components/netflix-index/netflix-index.component';
import { NetflixMainComponent } from './components/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './components/netflix-register/netflix-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixHeaderComponent,
    NetflixIndexComponent,
    NetflixMainComponent,
    NetflixRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  // bootstrap:[NetflixHeaderComponent]
  bootstrap:[NetflixIndexComponent]
})
export class AppModule { }
