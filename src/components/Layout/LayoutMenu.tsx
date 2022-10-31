import styled from "styled-components";
import LayoutMenuCategory from "./LayoutMenuCategory"
import LayoutMenuItem from "./LayoutMenuItem";


type Extensions = {
  Category: typeof LayoutMenuCategory;
  Item: typeof LayoutMenuItem;
};

interface LayoutMenuProps {
  children?: React.ReactNode;
}

const Menu = styled.div`
  background-color: AliceBlue;
  height: 100vh;
  width: 300px;
`;

const LayoutMenu: React.FC<LayoutMenuProps> & Extensions = (props) => {
  const { children } = props;
  return <Menu>{children}</Menu>;
};

LayoutMenu.Category = LayoutMenuCategory;
LayoutMenu.Item = LayoutMenuItem;

export default LayoutMenu;
