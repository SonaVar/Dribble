import React, { useState } from "react";

import "./ShotsGridItem.scss";

import Image from "react-bootstrap/Image";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

export default function ShotsGridItem(props) {
  //sets state on Mouse Over and Mouse Leave
  const [title, setTitle] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [image, setImage] = useState(props.stillUrl);

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
        className="user-shot__picture"
        onMouseOver={() => mouseOverEvent(true)}
        onMouseLeave={() => mouseOverEvent(false)}
        title={title}
      >
        <source type="video/mp4" srcSet={image} />
        <source type={props.mimeType} srcSet={image} />
        <img className="user-shot__image" src={image} alt="user-shot" />
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
            <Image className="user-shot__avatar" src={props.author.avatarUrl} />
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
