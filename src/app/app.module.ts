import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import {Routes, RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { HotelsComponent } from './hotels/hotels.component';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes =[
  { path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HeaderComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
