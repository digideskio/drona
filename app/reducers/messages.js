import { TAKE_OFF } from '../actions/drone';

const initialState = {
  messages: []
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case TAKE_OFF:
      return state;
    default:
      return state;
  }
}
