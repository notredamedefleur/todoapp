import { Button } from "../../shared/components/Button/index.jsx";
import { Modal } from "../../shared/components/Modal/index.jsx";
import {
  AvatarGallery,
  NameInput,
  Background,
  NameEnter,
  Welcome,
} from "./styles.js";
import { UserAvatar } from "../../shared/components/UserAvatar/index.jsx";

export const LoginPopUp = ({
  setUserName,
  setUserAvatar,
  setShowModal,
  showModal,
}) => {
  return (
    <>
      <Modal showModal={showModal}>
        <Background>
          <Welcome>WELCOME</Welcome>
          <div>
            <NameEnter>Enter your name</NameEnter>
            <NameInput onInput={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <NameEnter>Choose an avatar</NameEnter>
            <AvatarGallery>
              <UserAvatar
                userImage={"./public/chicken.jpg"}
                onClick={() => setUserAvatar("./public/chicken.jpg")}
              />
              <UserAvatar
                userImage={"./public/cat.jpg"}
                onClick={() => setUserAvatar("./public/cat.jpg")}
              />
              <UserAvatar
                userImage={"./public/lion.jpg"}
                onClick={() => setUserAvatar("./public/lion.jpg")}
              />
              <UserAvatar
                userImage={"./public/monkey.jpg"}
                onClick={() => setUserAvatar("./public/monkey.jpg")}
              />
              <UserAvatar
                userImage={"./public/swine.jpg"}
                onClick={() => setUserAvatar("./public/swine.jpg")}
              />
            </AvatarGallery>
          </div>
          <Button
            variant="bordered"
            onClick={(e) => setShowModal(false)}
            style={{
              marginBottom: "30px",
              backgroundColor: "#DDFFB2",
              padding: "0px 30px 0px 30px",
            }}
          >
            Continue
          </Button>
        </Background>
      </Modal>
    </>
  );
};
