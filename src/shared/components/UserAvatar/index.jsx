import { UserImg, UserImgPick } from "./styles.jsx";

export const UserAvatar = ({
  userImage,
  type = "default",
  alt = "Index",
  onClick,
}) => {
  if (type === "onUser") {
    return <UserImg alt={alt} src={userImage} onClick={onClick} />;
  }
  if (type === "default") {
    return <UserImgPick alt={alt} src={userImage} onClick={onClick} />;
  }
};
