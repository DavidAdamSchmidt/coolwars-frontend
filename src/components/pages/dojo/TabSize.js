import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { useDojoContext } from "../../../contexts/DojoContext";

const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 0;
  display: grid;
  grid-template-columns: auto repeat(3, 40px);
  grid-column-gap: 10px;
  border-radius: 4px;
  width: 250px;
  height: auto;
  padding: 12px;
  cursor: initial;
  line-height: 40px;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }) => theme.tabSizeBackground};
`;

const Size = styled.div`
  width: 40px;
  height: 40px;
  font-size: 24px;

  ${({ selected }) =>
    selected
      ? css`
          background: darkgreen;
          color: white;
          cursor: default;
        `
      : css`
          &:hover {
            background: limegreen;
            cursor: pointer;
            color: white;
          }
        `}
`;

const TabSize = ({ handleClose }, tabSizeRef) => {
  const { tabSize, setTabSize } = useDojoContext();

  return (
    <Container ref={tabSizeRef}>
      Tab Spaces:
      {[2, 4, 8].map(size => (
        <Size
          key={size}
          selected={size === tabSize}
          onClick={() => setTabSize(size)}
        >
          {size}
        </Size>
      ))}
    </Container>
  );
};

export default forwardRef(TabSize);
