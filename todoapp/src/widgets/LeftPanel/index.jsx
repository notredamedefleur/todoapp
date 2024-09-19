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
} from "./styles.jsx";
import { UserAvatar } from "../../shared/components/UserAvatar/index.jsx";
import { Divider } from "../../shared/components/Divider/index.jsx";
import { Tag } from "../../shared/components/Tag/index.jsx";
import { Button } from "../../shared/components/Button/index.jsx";
import React from "react";

export const LeftPanel = ({
  handleClick,
  tags,
  handleTagClick,
  showAllTags,
  clearLS,
}) => {
  return (
    <Background>
      <UserPanel>
        <UserAvatar
          type="onUser"
          userImage={localStorage.userAvatar || "./public/chicken.jpg"}
        />
        <span>{localStorage.userName || ""}</span>
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
        <div style={{ display: "flex", justifyContent: "center" }}></div>
      </ButtonWrapper>
      <ResetButton variant="bordered" onClick={clearLS}>
        Reset
      </ResetButton>
    </Background>
  );
};
