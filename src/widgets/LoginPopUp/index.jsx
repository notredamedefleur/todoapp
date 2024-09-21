import { Button, Modal } from "shared/components";

import {
  AvatarGallery,
  NameInput,
  Background,
  NameEnter,
  Welcome,
  Wrapper,
} from "./styles.js";
import { UserAvatar } from "shared/components";
import { useCallback, useMemo} from "react";
import { avatars } from "shared/consts/avatars.js";

export const LoginPopUp = ({
  setUserName,
  setUserAvatar,
  setShowModal,
  showModal,
    inputNameValue, setInputNameValue,
    avatarValue, setAvatarValue,
    selectedAvatar, setSelectedAvatar,
}) => {


  const selectAndHighlight = useCallback((url) => {
    setAvatarValue(url);
    setSelectedAvatar(url);
  }, []);

  const handleChange = useCallback((e) => {
    setInputNameValue(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    setUserAvatar(avatarValue);
    setUserName(inputNameValue);
    setShowModal(false);
  }, [avatarValue, inputNameValue]);

  const avatarList = useMemo(
    () =>
      avatars.map((avatar) => (
        <UserAvatar
          selectedAvatar={selectedAvatar}
          key={avatar}
          userImage={avatar}
          onClick={() => selectAndHighlight(avatar)}
          isSelected={selectedAvatar === avatar}
        />
      )),
    [selectedAvatar],
  );



  return (
    <>
      <Modal showModal={showModal}>
        <Background>
          <Welcome>WELCOME</Welcome>
          <Wrapper>
            <NameEnter>Enter your name</NameEnter>
            <NameInput value={inputNameValue} onChange={(e) => handleChange(e)} />
          </Wrapper>
          <div>
            <NameEnter>Choose an avatar</NameEnter>
            <AvatarGallery>{avatarList}</AvatarGallery>
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
