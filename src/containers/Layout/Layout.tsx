import { Outlet } from "react-router-dom";
import styled from "styled-components";

import LayoutMenu from "../../components/Layout/LayoutMenu";
import links from "../../components/reducers/links";

const optionsDropdownOne = [
  { id: 1, title: "Срочные задачи", link: '5' },
  { id: 2, title: "Текущие задачи" },
  { id: 3, title: "Все задачи" },
];

const LayoutWrapper = styled.div``;
const LayoutNav = styled.div`
  float: left;
`;
const LayoutMain = styled.div`
  float: left;
`;

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = () => {
  return (
    <LayoutWrapper>
      <LayoutNav>
        <LayoutMenu>
          <LayoutMenu.Item title={"Создать задачу"} link={links.create_task.url}></LayoutMenu.Item>
          <LayoutMenu.Category
            name={"Задачи"}
            optionsDropdown={optionsDropdownOne}
          />
        </LayoutMenu>
      </LayoutNav>
      <LayoutMain>
        <Outlet></Outlet>
      </LayoutMain>
    </LayoutWrapper>
  );
};

export default Layout;
