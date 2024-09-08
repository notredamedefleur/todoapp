import {
    TagsTab,
    TasksBody,
    TasksHeader,
    TasksTab,
    UserPanel,
    Background,
    TagsHeader,
    TagsBody,
    ButtonWrapper, ResetButton,
} from "./styles.jsx";
import { UserAvatar } from "../../shared/components/UserAvatar/index.jsx";
import { Divider } from "../../shared/components/Divider/index.jsx";
import { Tag } from "../../shared/components/Tag/index.jsx";
import { Button } from "../../shared/components/Button/index.jsx";

export const LeftPanel = () => {
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
            <TasksHeader>TASKS</TasksHeader>
            <TasksBody>
              <Button>Today</Button>
              <Button>Upcoming</Button>
              <Button>Finished</Button>
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
        <ResetButton variant='bordered'>Reset</ResetButton>
      </ButtonWrapper>
    </Background>
  );
};
