import React, { useState } from "react";

import "./ShotsGridItem.scss";
import useWindowSize from "../hooks/useWindowSize";

import Image from "react-bootstrap/Image";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

export default function ShotsGridItem(props) {
  const [image, setImage] = useState(props.stillUrl);
  const [title, setTitle] = useState("");
  const [isShown, setIsShown] = useState(false);

  const size = useWindowSize();
  console.log(size)
  
  const mouseOverEvent = (bool) => {
    if (bool) {
      setTitle(props.title);
      setIsShown(true);
      if (props.videoUrl) {
        setImage(props.videoUrl);
      }
    } else {
      setIsShown(false);
      setImage(props.stillUrl);
    }
  };

  return (
    <div className="user-shot__item" data-testid="shots">
      <picture
        onMouseOver={() => mouseOverEvent(true)}
        onMouseLeave={() => mouseOverEvent(false)}
        title={title}
      >
        <source type="video/mp4" srcSet={image} />
        <source type={props.mimeType} srcSet={image} />
        <img class="user-shot__image" src={image} alt="user-shot" />
      </picture>
      {isShown && (
        <div className="user-shot__overlay">
          <div className="user-shot__overlay-content">
            <div className="user-shot__overlay-text">{props.title}</div>
          </div>
        </div>
      )}
      <div className="user-shot__name">
        <div className="user-shot__box">
          <a href={props.author.profileUrl}>
          < Image className="user-shot__avatar" src={props.author.avatarUrl} onClick/>
          </a>
          <h5>{props.author.name}</h5>
          <div className="user-shot__label">
            {props.author.isPro ? "PRO" : "TEAM"}
          </div>
        </div>
        <section className="user-shot__container">
          <div className="user-shot__section">
            <ModeCommentIcon
              className="user-shot__comment"
              color="disabled"
              fontSize="inherit"
            ></ModeCommentIcon>
            {props.commentsCount}
            <FavoriteIcon
              className="user-shot__like"
              color="disabled"
              fontSize="inherit"
            ></FavoriteIcon>
            {props.likesCount}
          </div>
        </section>
      </div>
    </div>
  );
}
