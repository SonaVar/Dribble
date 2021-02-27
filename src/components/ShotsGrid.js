import React from "react";

import ShotsGridItem from "./ShotsGridItem";

export default function ShotsGrid(props) {
  //renders a Shorts Grid Item for each user shot in the API
  const grid = props.shots.map((shot) => {
    return (
      <section key={shot.id}>
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
      </section>
    );
  });

  return grid;
}
