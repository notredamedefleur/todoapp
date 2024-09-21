import React from "react";
import {
  TagsTab,
  TasksBody,
  TasksHeader,
  TasksTab,
  UserPanel,
  Background,
  TagsHeader,
  TagsBody,
  ButtonWrapper,
  ResetButton,
  InfoText,
} from "./styles.jsx";

import { UserAvatar, Divider, Tag, Button } from "shared/components";

export const LeftPanel = ({
  handleClick,
  tags,
  handleTagClick,
  showAllTags,
  clearLS,
  userName,
  userAvatar,
}) => {
  return (
    <Background>
      <UserPanel>
        <UserAvatar type="onUser" userImage={userAvatar || "./chicken.jpg"} />
        <span>{userName || ""}</span>
      </UserPanel>
      <Divider />
      <ButtonWrapper>
        <div>
          <TasksTab>
            <TasksHeader onClick={() => handleClick("all")}>TASKS</TasksHeader>
            <TasksBody>
              <Button onClick={() => handleClick("today")}>Today</Button>
              <Button onClick={() => handleClick("upcoming")}>Upcoming</Button>
              <Button onClick={() => handleClick("finished")}>Finished</Button>
            </TasksBody>
          </TasksTab>
          <TagsTab>
            <TagsHeader onClick={showAllTags}>TAGS</TagsHeader>
            <TagsBody>
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  tagName={tag.tagName}
                  tagColor={tag.tagColor}
                  handleTagClick={() => handleTagClick(tag)}
                ></Tag>
              ))}
            </TagsBody>
          </TagsTab>
        </div>
        <InfoText>Click on TASKS or TAGS to reset sorting (test)</InfoText>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
      </ButtonWrapper>
      <ResetButton variant="bordered" onClick={clearLS}>
        Reset
      </ResetButton>
    </Background>
  );
};
