import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, routeName } = category;
  const navigate = useNavigate();

  const handleLink = () => navigate(routeName);

  return (
    <DirectoryItemContainer
      onClick={handleLink}
      className="directory-item-container"
    >
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <Body className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
