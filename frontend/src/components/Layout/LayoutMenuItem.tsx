import styled from "styled-components";
import { Link } from "react-router-dom";

interface LayoutMenuItemProps {
  isCategory?: boolean;
  title: string;
  link?: string;
}

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 40px;
  &:hover {
    background-color: #c5e3fc;
  }
`;

const LayoutMenuItem: React.FC<LayoutMenuItemProps> = (props) => {
  const { isCategory, title, link } = props;
  return link ? (
    <Link to={link} className={"linkRouter"}>
      <Item>{title}</Item>
    </Link>
  ) : (
    <Item>{title}</Item>
  );
};

export default LayoutMenuItem;
