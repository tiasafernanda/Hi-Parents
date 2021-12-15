import { GETNANNYLIST_BEGIN, GETNANNYLIST_SUCCES, GETNANNYLIST_FAIL } from '../actions/types';

const initialState = {
  nannyList: [],
  loading: false,
  error: null,
};

const nannyListReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GETNANNYLIST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GETNANNYLIST_SUCCES:
      return {
        ...state,
        loading: false,
        error: null,
        nannyList: payload,
      };
    case GETNANNYLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        nannyList: [],
      };
  }
};

export default nannyListReducer;
