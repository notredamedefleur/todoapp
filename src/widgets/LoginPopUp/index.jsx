import { Button, Modal } from "shared/components";

import {
  AvatarGallery,
  NameInput,
  Background,
  NameEnter,
  Welcome,
} from "./styles.js";
import { UserAvatar } from "shared/components";
import { useCallback, useState } from "react";

export const LoginPopUp = ({
  setUserName,
  setUserAvatar,
  setShowModal,
  showModal,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [avatarValue, setAvatarValue] = useState("");

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    setUserAvatar(avatarValue);
    setUserName(inputValue);
    setShowModal(false);
  }, [avatarValue, inputValue]);

  return (
    <>
      <Modal showModal={showModal}>
        <Background>
          <Welcome>WELCOME</Welcome>
          <div>
            <NameEnter>Enter your name</NameEnter>
            <NameInput value={inputValue} onChange={(e) => handleChange(e)} />
          </div>
          <div>
            <NameEnter>Choose an avatar</NameEnter>
            <AvatarGallery>
              <UserAvatar
                userImage={"./public/chicken.jpg"}
                onClick={() => setAvatarValue("./public/chicken.jpg")}
              />
              <UserAvatar
                userImage={"./public/cat.jpg"}
                onClick={() => setAvatarValue("./public/cat.jpg")}
              />
              <UserAvatar
                userImage={"./public/lion.jpg"}
                onClick={() => setAvatarValue("./public/lion.jpg")}
              />
              <UserAvatar
                userImage={"./public/monkey.jpg"}
                onClick={() => setAvatarValue("./public/monkey.jpg")}
              />
              <UserAvatar
                userImage={"./public/swine.jpg"}
                onClick={() => setAvatarValue("./public/swine.jpg")}
              />
            </AvatarGallery>
          </div>
          <Button
            variant="bordered"
            onClick={handleClose}
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
