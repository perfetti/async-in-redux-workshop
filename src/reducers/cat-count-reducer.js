import {
  INCREMENT_CAT_COUNT,
  DECREMENT_CAT_COUNT,
  CHANGE_IMAGE_SUCCESS
} from 'constants';

export default function(state = {catCount: 1, url: null}, {type, payload}) {
  var newState = Object.assign({}, state);
  switch (type) {
    case INCREMENT_CAT_COUNT:
      newState.catCount += 1;
      return newState;
    case DECREMENT_CAT_COUNT:
      newState.catCount += 1;
      return newState;
    case CHANGE_IMAGE_SUCCESS:
      newState.url = payload.url;
      // console.log(state);
      // console.log(newState);
      // console.log(payload);
      // console.log('old url ' + state.url)
      // console.log('new url ' + newState.url)
      return newState;
    default:
      return state;
  }
}
