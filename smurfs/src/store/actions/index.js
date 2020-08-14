import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }));
  };
};

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF, payload: newSmurf });

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        console.log("NEW SMURF WAS ADDED!!!", res);
      })
      .catch((err) => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
  };
};
