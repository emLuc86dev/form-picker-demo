import React, { useContext, useState } from "react";
import reactCSS from "reactcss";
import ShowColorPiker from "./ShowColorPiker";
import FormContext from "../../context/FormContext";
import { StyledSawtch } from "./IterableStyled";

let defaultColor = { r: "241", g: "112", b: "19", a: "5" };

const ColorPicker = ({ radioCall = false, getColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);

  const { dispatch } = useContext(FormContext);

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = (accepted) => {
    setDisplayColorPicker(false);
    if (accepted === true) {
      const colorConverted = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      dispatch({ type: "COLOR_HEX", payload: colorConverted });
      defaultColor = { ...color };
      radioCall = false;
      return;
    }
    setColor(defaultColor);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        width: "28px",
        height: "28px",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        cursor: "pointer",
      },
    },
  });

  return (
    <>
      {!radioCall && (
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>
       
      )}

      {(displayColorPicker || radioCall) && (
        <ShowColorPiker
          color={color}
          onChange={handleChange}
          close={handleClose}
        />
      )}
    </>
  );
};

export default ColorPicker;
