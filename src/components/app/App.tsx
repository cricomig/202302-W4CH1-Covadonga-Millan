import React from "react";
import "./App.css";
import { Gentleman } from "../gentleman/gentleman";
import { GENTLEMEN } from "../../mocks/mock";

export function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <p className="info">0 gentlemen pointing at you</p>
          <button className="button button--select">Select all</button>
        </section>
      </div>
      <main className="main">
        <ul className="gentlemen">
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
        </ul>
      </main>
    </>
  );
}

export default App;
