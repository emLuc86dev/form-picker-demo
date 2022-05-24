import React from "react";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  height: 75;
  width: 270;
`;

export const ItemColor = styled.button.attrs(({ value, name }) => ({
  type: "text",
  value: value || "emilio",
  checked: value === name,
}))`
  background: ${({ color, checked }) => {
    if (checked) return "#fff";
    return color;
  }};
  padding: 1px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: height 100ms ease 0s, width 100ms ease 0s;
  
`;


export const StyledSawtch = styled.div`
  background: ${({ color }) => color};
  height: 28px;
  width: 28px;
  margin-top: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  position: relative;
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  box-sizing: border-box;
  transform: scale(1);
  box-shadow: rgb(233 30 99) 0px 0px 0px;
  border: 0;
  &:hover {
    transform: scale(1.28);
    transition: transform 100ms ease 0s, box-shadow 100ms;
    /* transform: scale(0.97); */
  }
`;
