import React, { useState } from "react";

const MainForm = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerms = { origin, destination, date };
    console.log(searchTerms);
    setOrigin("");
    setDestination("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Origin"
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Destination"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
