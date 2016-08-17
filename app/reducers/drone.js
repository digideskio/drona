import { TAKE_OFF } from '../actions/drone';

export default function counter(state, action) {
  switch (action.type) {
    case TAKE_OFF:
      return state;
    default:
      return state;
  }
}
