import React from 'react'

import "./ShotsGridItem.scss"

const classnames = require ('classnames');

export default function ShotsGridItem(props) {

  const userShot = classnames({
    "user-shot__item" : true, 
   // "user-shot__item--selected" : props.selected,
  });

  return (
    <li className={userShot} data-testid="shots">
      <h1>Hey</h1>
      <image src={props.stillUrl}></image>
    </li>
  );
};