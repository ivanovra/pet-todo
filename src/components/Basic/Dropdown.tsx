import { useState } from "react";
import styled from "styled-components";

interface Option {
  id: string | number
  titile: string
}

interface DropdownProps {
  options?: Option[];
}

const DropdownWrapper = styled.div<DropdownProps>`

`;

const DropdownTitle = styled.div<DropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 40px;
  border: "1px solid black";
  &:hover {
    background-color: #c5e3fc;
  }
`;

const DropdownPanel = styled.div<DropdownProps>`
  // padding: 10px;
  // height: 40px;
  border: 1px solid black;
  -moz-transition: margin 1s;
  -o-transition: margin 1s;
  -webkit-transition: margin 1s;
  transition: height 1s;
  &:hover {
    // background-color: #c5e3fc;
  }
`;

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {options } = props
  const [isVisiblePanel, setIsVisiblePanel] = useState<boolean>(true)

  return (
    <DropdownWrapper>
      <DropdownTitle onClick={() => setIsVisiblePanel(!isVisiblePanel)}>Title</DropdownTitle>
      <DropdownPanel style={{height: isVisiblePanel ? '49px' : '0px'}}>
          {options && options.map(option => <div>option</div>)}
      </DropdownPanel>
    </DropdownWrapper>
  );
};

export default Dropdown;
