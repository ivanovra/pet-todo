import { useState } from "react";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export interface Option {
  id: string | number;
  title: string;
  link?: string;
}

interface DropdownProps {
  options: Option[];
  title?: string;
}

const DropdownWrapper = styled.div``;

const DropdownTitle = styled.div`
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

const DropdownPanel = styled.div`
  position: relative;
  -moz-transition: height 0.5s linear;
  -o-transition: height 0.5s linear;
  -webkit-transition: height 0.5s linear;
  transition: height 0.5s linear;
  overflow: hidden;
  &:hover {
    // background-color: #c5e3fc;
  }
`;

const DropdownOption = styled.div`
  padding: 10px;
  height: 20px;
  position: relative;
  left: 0px;
  -moz-transition: left 0.2s linear;
  -o-transition: left 0.2s linear;
  -webkit-transition: left 0.2s linear;
  transition: left 0.2s linear;
  cursor: default;
  &:hover {
    left: 20px;
  }
`;

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, title } = props;
  const [isVisiblePanel, setIsVisiblePanel] = useState<boolean>(true);

  return (
    <DropdownWrapper>
      <DropdownTitle onClick={() => setIsVisiblePanel(!isVisiblePanel)}>
        {title}
        <DownOutlined />
      </DropdownTitle>
      <DropdownPanel
        style={{
          height: isVisiblePanel ? options!.length * 40 + "px" : "0px",
        }}
      >
        {options &&
          options.map((option) =>
            option.link ? (
              <Link
                to={option.link}
                className={"linkRouter"}
              >
                <DropdownOption>{option.title}</DropdownOption>
              </Link>
            ) : (
              <DropdownOption>{option.title}</DropdownOption>
            )
          )}
      </DropdownPanel>
    </DropdownWrapper>
  );
};

export default Dropdown;
