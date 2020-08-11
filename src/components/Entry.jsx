import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span>{props.name}</span>
      </dt>
      <dd>Area : {props.area}</dd>
      <dd>City : {props.city}</dd>
      <dd>
        Category : {props.category1} {props.category2} {props.category3}
      </dd>
      <h3>Customer Ratings</h3>
      <div>
        <dd>
          rating: {props.rati1} votes: {props.vot1}
        </dd>
        <dd>
          rating: {props.rati2} votes: {props.vot2}
        </dd>
        <dd>
          rating: {props.rati3} votes: {props.vot3}
        </dd>
        <dd>
          rating: {props.rati4} votes: {props.vot4}
        </dd>
        <dd>
          rating: {props.rati5} votes: {props.vot5}
        </dd>
      </div>
      <h4>Total Votes : {props.total}</h4>
      <h3>Feature Ratings</h3>
      <div>
        <dd>Place : {props.frp}</dd>
        <dd>Food : {props.frf}</dd>
        <dd>Service : {props.frse}</dd>
        <dd>Staff : {props.frst}</dd>
        <dd>Breakfast : {props.frbf}</dd>
      </div>
    </div>
  );
}

export default Entry;
