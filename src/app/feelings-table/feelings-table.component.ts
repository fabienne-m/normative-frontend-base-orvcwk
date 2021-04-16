import { C } from "@angular/cdk/typings/esm5/keycodes";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AddFeeling } from "../actions/feelings.actions";
import { Feeling } from "../models/feeling.model";

const TABLE_DATA: Feeling[] = [
  { sector: "A", co2: 1, feeling: "😀" },
  { sector: "B", co2: 3, feeling: "😐" },
  { sector: "C", co2: 2, feeling: "🙂" }
];

@Component({
  selector: "app-feelings-table",
  templateUrl: "./feelings-table.component.html",
  styleUrls: ["./feelings-table.component.css"]
})
export class FeelingsTableComponent implements OnInit {
  displayedColumns: string[] = ["sector", "co2", "feeling"];

  feelings$: Observable<Feeling>;

  constructor(private store: Store) {
    this.feelings$ = this.store.select(state => state.feelings.feelings);
  }

  ngOnInit() {
    for (const f of TABLE_DATA) {
      this.store.dispatch(new AddFeeling(f));
    }
  }
}
