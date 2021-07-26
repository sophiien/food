import React from "react";
import Card from "./common/Card";
import { getContributors } from "../services/contributorService";

const Search = () => {
  const contributors = getContributors();
  return (
    <div>
      {contributors.map((contributor, i) => (
        <Card
          key={i}
          header={contributor.hawkerName}
          subheader={contributor.postalCode}
          body={contributor.recommendations}
        />
      ))}
    </div>
  );
};

export default Search;
