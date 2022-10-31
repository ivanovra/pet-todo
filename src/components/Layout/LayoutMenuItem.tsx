import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

interface LayoutMenuItemProps {
  isCategory?: boolean;
  title: string;
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
  const { isCategory, title } = props;
  return (
    <Item>{title}</Item>
  );
};

export default LayoutMenuItem;
