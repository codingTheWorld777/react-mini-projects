import React from "react";
import { connect } from "react-redux";
import { numberOfCard } from "../../actions";

const NumberOfCard = ({ numberOfCard }) => {
  return (
    <div className="mt-3 mb-5">
      <h3>Nombre d'éléments par page</h3>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue="12"
          onChange={(e) => numberOfCard(e.target.value)}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
};

export default connect(null, { numberOfCard })(NumberOfCard);
