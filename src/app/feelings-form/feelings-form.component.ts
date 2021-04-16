import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngxs/store";
import { AddFeeling } from "../actions/feelings.actions";
import { FeelingsDialogComponent } from "../feelings-dialog/feelings-dialog.component";
import emojiRegex from "emoji-regex";

@Component({
  selector: "app-feelings-form",
  templateUrl: "./feelings-form.component.html",
  styleUrls: ["./feelings-form.component.css"]
})
export class FeelingsFormComponent implements OnInit {
  sectors = [{ value: "A" }, { value: "B" }, { value: "C" }, { value: "D" }];

  @ViewChild("form", { static: true }) form;

  feelingForm = new FormGroup({
    sector: new FormControl("", [Validators.required]),
    emissions: new FormControl("", [Validators.required, Validators.min(0)]),
    feeling: new FormControl("", [
      Validators.required,
      Validators.maxLength(2),
      Validators.pattern(emojiRegex())
    ])
  });

  constructor(public dialog: MatDialog, private store: Store) {}

  openDialog() {
    const dialogRef = this.dialog.open(FeelingsDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.feelingForm.patchValue({ feeling: result });
      }
    });
  }

  saveForm() {
    this.store.dispatch(
      new AddFeeling({
        sector: this.feelingForm.value.sector,
        co2: this.feelingForm.value.emissions,
        feeling: this.feelingForm.value.feeling
      })
    );
    this.form.resetForm();
    this.feelingForm.markAsPristine();
    this.feelingForm.markAsUntouched();
  }

  ngOnInit() {}
}
