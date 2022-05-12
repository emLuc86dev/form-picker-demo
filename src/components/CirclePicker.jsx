import { Stack, Typography } from "@mui/material";
import Circle from "@uiw/react-color-circle";
import { useState, useContext } from "react";
import FormContext from "../context/FormContext";
import "./CirclePicker.css";

function CirclePicker({ avatarColor }) {
  const [hex, setHex] = useState("");
  const { dispatch } = useContext(FormContext);

  const handleAvaterColor = () => {
    avatarColor(hex); //lifting state up
  };

  const handleColorHex = (color) => {
    dispatch({ type: "COLOR_HEX", payload: color });
  };

  return (
    <div
      className="circle_picker_container"
      style={{
        borderColor: hex,
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Color de tema
        </Typography>
        <Circle
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            margin: "auto",
            marginBottom: 0,
            padding: 0,
          }}
          colors={[
            "#f44336",
            "#e91e63",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#1866a7",
          ]}
          color={hex}
          onClick={handleAvaterColor}
          onChange={(color) => {
            setHex(color.hex);
            handleColorHex(color.hex);
          }}
        />
      </Stack>
    </div>
  );
}

export default CirclePicker;
