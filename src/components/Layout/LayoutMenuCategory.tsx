import styled from "styled-components";
import Dropdown, { Option } from "../Basic/Dropdown";

export interface LayoutMenuCategoryProps {
  name: string;
  optionsDropdown: Option[];
}

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 40px;
  &:hover {
    background-color: #c5e3fc;
  }
`;

const LayoutMenuCategory: React.ElementType<LayoutMenuCategoryProps> = (
  props
) => {
  const { name, optionsDropdown } = props;
  return <Dropdown options={optionsDropdown} title={name}></Dropdown>;
};

export default LayoutMenuCategory;
