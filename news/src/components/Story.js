import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <a href={story.url}>
        <p>{story.url}</p>
      </a>
      By: <p>{story.by}</p>
      Posted: <p>{story.time}</p>
    </>
  ) : null;
};
