import styled from "styled-components";


export interface LayoutMenuCategoryProps {
  title?: string;
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



const LayoutMenuCategory: React.ElementType<LayoutMenuCategoryProps> = (props) => {
  const { title } = props;
  return <div></div>;
};

export default LayoutMenuCategory;
