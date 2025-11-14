import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { UcenikInputComponent } from './ucenici/ucenik-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UceniciComponent,
    UcenikInputComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}