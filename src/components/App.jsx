import React from "react";
import Entry from "./Entry";
import data from "../data";
import Avatar from "./Avatar";

function createEntry(dataTerm) {
  const [honda] = data;
  const { review_rating: rev, feature_rating: fev } = honda;
  const {
    category: [category1, category2, category3]
  } = honda;
  const { votes: voting, total: tot } = rev;

  const [r1, r2, r3, r4, r5] = voting;

  const { rating: rat1, votes: v1 } = r1;
  const { rating: rat2, votes: v2 } = r2;
  const { rating: rat3, votes: v3 } = r3;
  const { rating: rat4, votes: v4 } = r4;
  const { rating: rat5, votes: v5 } = r5;

  return (
    <div className="term">
      <Avatar image={dataTerm.cover_image} />
      <Entry
        key={dataTerm.id}
        name={dataTerm.name}
        area={dataTerm.area}
        city={dataTerm.city}
        category1={category1}
        category2={category2}
        category3={category3}
        rati1={rat1}
        vot1={v1}
        rati2={rat2}
        vot2={v2}
        rati3={rat3}
        vot3={v3}
        rati4={rat4}
        vot4={v4}
        rati5={rat5}
        vot5={v5}
        total={tot}
        frp={fev.place}
        frf={fev.food}
        frse={fev.service}
        frst={fev.staff}
        frbf={fev.breakfast}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Market</span>
      </h1>
      <dl className="dictionary">{data.map(createEntry)}</dl>
    </div>
  );
}

export default App;
