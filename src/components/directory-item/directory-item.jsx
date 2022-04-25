import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";

function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const handleNavigate = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={handleNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
