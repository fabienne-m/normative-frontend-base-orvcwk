import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, NgxsModule.forRoot([])],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
