import React, { useContext, useRef, useState } from "react";
import "./IterablePicker.css";
import FormContext from "../../context/FormContext";
import ColorPicker from "./ColorPicker";
import reactCSS from "reactcss";
import { Wrapper, ItemColor, StyledSawtch } from "./IterableStyled";
import Picker from "./Picker";
import { green } from "@mui/material/colors";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#576570",
  "#bccf13",
];

let defaultColor = colors[colors.length - 1];

const IterablePicker = ({ editable = false, colorList = colors }) => {
  const [colorV, setColorV] = useState("");
  const [validate, setValidate] = useState(false);
  const [open, setOpen] = useState(false);

  const { colorHex, dispatch } = useContext(FormContext);

  const handleClick = (e) => {
    setColorV(e.target.name);
    dispatch({ type: "COLOR_HEX", payload: e.target.name });

    if (e.target.name === colors[colors.length - 1]) {
      setOpen((prevState) => !prevState);
      return;
    }
    setOpen(false);
  };

  const handleChange = (color) => {
    setColorV(color.hex);
  };

  const handleClose = (accepted) => {
    setOpen(false);
    // if (accepted === true) {
    dispatch({ type: "COLOR_HEX", payload: colorV });
    defaultColor = colorV;
    colors[colors.length - 1] = colorV;
    return;
    // } 
    // setColorV(defaultColor);
    // dispatch({ type: "COLOR_HEX", payload: colorV })
  };

  return (
    <Wrapper>
      {colorList.map((color) => {
        if (color === colors[colors.length - 1]) {
          editable = true;
          return (
            <StyledSawtch key={color} color={color}>
              <ItemColor
                key={color}
                color={color}
                name={color}
                value={colorV}
                onClick={handleClick}
              />
              {open && (
                <Picker
                  color={colorV}
                  onChange={handleChange}
                  close={handleClose}
                />
              )}
            </StyledSawtch>
          );
        }

        return (
          <StyledSawtch key={color} color={color}>
            <ItemColor
              key={color}
              color={color}
              name={color}
              value={colorV}
              onClick={handleClick}
            />
          </StyledSawtch>
        );
      })}
    </Wrapper>
  );
};

export default IterablePicker;
