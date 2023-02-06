import React from "react";
import "./App.css";
import { Gentleman } from "../gentleman/gentleman";
import { GENTLEMEN } from "../../mocks/mock";
import { Info } from "../info/info";

export function App() {
  return (
    <>
      <Info></Info>
      {GENTLEMEN.map((elem) => (
        <Gentleman
          name={elem.name}
          status={elem.status}
          profession={elem.profession}
          twitter={elem.twitter}
          picture={elem.picture}
          alternativeText={elem.alternativeText}
        ></Gentleman>
      ))}
    </>
  );
}

export default App;
