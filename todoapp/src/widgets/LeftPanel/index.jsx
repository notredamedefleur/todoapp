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



export const LeftPanel = ({handleClick}) => {
  return (
    <Background>
      <UserPanel>
        <UserAvatar userImage="./public/chicken.jpg" />
        userName
      </UserPanel>
      <Divider />
      <ButtonWrapper>
        <div>
          <TasksTab>
            <TasksHeader onClick={() => handleClick('all')}>TASKS</TasksHeader>
            <TasksBody>
              <Button onClick={() => handleClick('today')}>Today</Button>
              <Button onClick={() => handleClick('upcoming')}>Upcoming</Button>
              <Button onClick={() => handleClick('finished')}>Finished</Button>
            </TasksBody>
          </TasksTab>
          <TagsTab>
            <TagsHeader>TAGS</TagsHeader>
            <TagsBody>
              <Tag name="check" backgroundColor="null" />
              <Tag name="check" />
              <Tag name="check" />
            </TagsBody>
          </TagsTab>
        </div>
        <ResetButton variant="bordered">Reset</ResetButton>
      </ButtonWrapper>
    </Background>
  );
};
