import React from "react";
import SmurfsList from "./SmurfsList";
import { fetchSmurfs } from "../store/actions";
import { connect } from "react-redux";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <SmurfsList
        fetchSmurfs={props.fetchSmurfs}
        isLoading={props.isLoading}
        error={props.error}
        smurfs={props.smurfs}
      />
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

export default connect(mapStateToProps, { fetchSmurfs })(App);
