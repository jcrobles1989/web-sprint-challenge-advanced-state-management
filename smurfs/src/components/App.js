import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../store/actions";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

import "../styles.css";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="header">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </div>
      <div className="list-container">
        <SmurfsList
          fetchSmurfs={props.fetchSmurfs}
          isLoading={props.isLoading}
          error={props.error}
          smurfs={props.smurfs}
        />
      </div>
      <div className="form-container">
        <SmurfForm addSmurf={props.addSmurf} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
