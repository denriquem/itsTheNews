import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import { StoryWrapper, StoryTitle } from "../styles/StoryStyles";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.url}</a>
      </StoryTitle>
      By: <p>{story.by}</p>
      Posted: <p>{story.time}</p>
    </StoryWrapper>
  ) : null;
};
