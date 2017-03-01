import {
  INCREMENT_CAT_COUNT,
  DECREMENT_CAT_COUNT,
  CHANGE_IMAGE
} from 'constants';

export function incrementCatCount() {
  return {
    type: INCREMENT_CAT_COUNT
  }
}

export function decrementCatCount() {
  return {
    type: DECREMENT_CAT_COUNT
  }
}

export function changeImage() {
  return {
    type: CHANGE_IMAGE
  }
}