import React from "react";

import "./Application.scss";
import ShotsGrid from "./ShotsGrid";

import useApplicationData from "../hooks/useApplicationData";

export default function Application(props) {

  //imports values from useApplicationData custom hook
  const { state } = useApplicationData();

  console.log(state)
  return (
    <main className="layout">
      <section className="application">
        <ul>
          <ShotsGrid 
            key={state.shot.id}
            shots={state.shot}
          />
        </ul>
      </section>
    </main>
  );
}