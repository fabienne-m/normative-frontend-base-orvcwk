import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { FeelingsFormComponent } from "./feelings-form/feelings-form.component";
import { FeelingsDialogComponent } from "./feelings-dialog/feelings-dialog.component";
import { FeelingsTableComponent } from "./feelings-table/feelings-table.component";
import { FeelingState } from "./state/feeling.state";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([FeelingState]),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule
  ],
  declarations: [
    AppComponent,
    FeelingsFormComponent,
    FeelingsDialogComponent,
    FeelingsTableComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [FeelingsDialogComponent]
})
export class AppModule {}
