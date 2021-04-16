import { Feeling } from "../models/feeling.model";

export class AddFeeling {
  static readonly type = "[FEELING] Add";

  constructor(public payload: Feeling) {}
}
