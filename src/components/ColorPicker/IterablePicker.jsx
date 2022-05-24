import React, { useContext, useState } from "react";
import FormContext from "../../context/FormContext";
import { Wrapper, ItemColor, StyledSawtch } from "./IterableStyled";
import Picker from "./Picker";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#576570",
  "#bccf13",
];

// let defaultColor = colors[colors.length - 1];

const IterablePicker = () => {
  const [colorV, setColorV] = useState("");
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
    // if (accepted === true) { // Don't delete this comented code for future functionality
    dispatch({ type: "COLOR_HEX", payload: colorV });
    // defaultColor = colorV;
    colors[colors.length - 1] = colorV;
    return;
    // }
    // setColorV(defaultColor);
    // dispatch({ type: "COLOR_HEX", payload: colorV })
  };

  return (
    <Wrapper>
      {colors.map((color, index) => {
        if (color === colors[colors.length - 1]) {
          return (
            <StyledSawtch key={color} color={color}>
              <ItemColor
                color={color}
                name={color}
                value={colorHex}
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
