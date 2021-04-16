import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import emojiRegex from "emoji-regex";

@Component({
  selector: "app-feelings-dialog",
  templateUrl: "./feelings-dialog.component.html",
  styleUrls: ["./feelings-dialog.component.css"]
})
export class FeelingsDialogComponent implements OnInit {
  emoji = new FormControl("", [
    Validators.required,
    Validators.maxLength(2),
    Validators.pattern(emojiRegex())
  ]);

  constructor(public dialogRef: MatDialogRef<FeelingsDialogComponent>) {}

  ngOnInit() {}

  close() {
    if (this.emoji.valid) {
      this.dialogRef.close(this.emoji.value);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
