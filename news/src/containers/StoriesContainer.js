import React, { useEffect, useState } from "react";
import { Story } from "../components/Story";
import { getStoryIds, getStory } from "../services/hnApi";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(20970623).then((data) => console.log(data));
  }, []);
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid="stories-container">
        <h1>HackerNewsStories</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
