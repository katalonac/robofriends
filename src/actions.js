import { CHANGE_SERACH_FIELD } from './types';

export const setSearchField = (text) => ({
  type: CHANGE_SERACH_FIELD,
  payload: text
});