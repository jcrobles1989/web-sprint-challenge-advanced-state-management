import React, { useEffect } from "react";

const SmurfsList = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.isLoading && <h4>Loading Smurf Data...</h4>}
      {props.error && (
        <p className="error">Oops, something went wrong: {props.error}</p>
      )}
      {props.smurfs.length > 0 && (
        <div className="smurfs">
          {props.smurfs.map((smurf, index) => (
            <div className="card" key={index}>
              <div className="card-info">
                <h2>{smurf.name}</h2>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <p>id: {smurf.id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmurfsList;
