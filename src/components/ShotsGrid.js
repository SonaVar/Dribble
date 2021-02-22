import React from 'react';

import ShotsGridItem from "./ShotsGridItem";

export default function ShotsGrid(props) {
  const grid = props.shots.map(shot => {
    return (
      <ul key={shot.id}>
        <ShotsGridItem 
          title={shot.title}
          likesCount={shot.likesCount}
          savesCount={shot.savesCount}
          commentsCount={shot.commentsCount}
          author={shot.author}
          stillUrl={shot.stillUrl}
          videoUrl={shot.videoUrl}
          responsiveThumbnails={shot.responsiveThumbnails}
        />
      </ul>
    );
  });

  return grid;
}
