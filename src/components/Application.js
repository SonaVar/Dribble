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
      <div className="application">
        <ShotsGrid 
          key={state.shot.id}
          shots={state.shot}
        />
      </div>
    </main>
  );
}