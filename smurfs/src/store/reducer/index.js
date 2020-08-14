import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_FAILURE,
} from "../actions";

export const initialState = {
  isLoading: false,
  smurfs: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case FETCH_SMURFS_FAILURE:
      return {
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    case ADD_SMURF_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
