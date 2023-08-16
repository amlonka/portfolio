import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { ModuleOneComponent } from './module-one/module-one.component';
import { HomeComponent } from './home/home.component';
import { ModuleTwoComponent } from './module-two/module-two.component';
import { ModuleThreeComponent } from './module-three/module-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleOneComponent,
    HomeComponent,
    ModuleTwoComponent,
    ModuleThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
