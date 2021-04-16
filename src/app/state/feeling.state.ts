import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddFeeling } from "../actions/feelings.actions";
import { Feeling } from "../models/feeling.model";

export class FeelingStateModel {
  feelings: Feeling[];
}

@State<FeelingStateModel>({
  name: "feelings",
  defaults: {
    feelings: []
  }
})
export class FeelingState {
  @Selector()
  static getFeelings(state: FeelingStateModel) {
    return state.feelings;
  }

  @Action(AddFeeling)
  add(
    { getState, patchState }: StateContext<FeelingStateModel>,
    { payload }: AddFeeling
  ) {
    const state = getState();
    patchState({
      feelings: [...state.feelings, payload]
    });
  }
}
