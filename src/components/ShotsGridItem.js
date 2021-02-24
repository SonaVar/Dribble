import React from 'react'

import "./ShotsGridItem.scss"

import Image from 'react-bootstrap/Image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';


export default function ShotsGridItem(props) {

  return (
    <div className='user-shot__item' data-testid="shots">
      <Image className='user-shot__image' src={props.stillUrl}></Image>
      <div className='user-shot__name'>
        <div className='user-shot__box'>
          <Image className='user-shot__avatar' src={props.author.avatarUrl}/>
          <h5>{props.author.name}</h5>
          <div className='user-shot__label'>{props.author.isPro ? 'PRO' : 'TEAM'}</div>
        </div>
        <section className='user-shot__container'>
          <div className='user-shot__section'>
            <ModeCommentIcon className='user-shot__comment' color="disabled" fontSize="inherit"></ModeCommentIcon>
            {props.commentsCount}
            <FavoriteIcon className='user-shot__like' color="disabled" fontSize="inherit"></FavoriteIcon>
            {props.likesCount}
          </div>
        </section>
      </div>
    </div>
  );
};