import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './another/another.component';
import { AnotheerComponent } from './other/another/another.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding.component';
import { TwoWaybindingComponent } from './data-binding/two-waybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    AnotheerComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWaybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
