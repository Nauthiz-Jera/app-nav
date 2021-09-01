import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
  isMenuOpen: true,
};

let state = initialState;

const navigationStore = {
  init: () => subject.next(state),
  subscribe: (setState) => subject.subscribe(setState),
  setNavigationState: (navState) => {
    state = {
      ...state,
      ...navState,
    };
    subject.next(state);
  },
  initialState,
};

export { navigationStore };
