import { Stack, Typography } from "@mui/material";
import Circle from "@uiw/react-color-circle";
import { useState } from "react";
import "./CirclePicker.css";

function CirclePicker({ avatarColor }) {
  const [hex, setHex] = useState("");
  // const [hex, setHex] = useRef("#F44E3B");

  const handleAvaterColor = () => {
    avatarColor(hex);
    console.log("clicked from handleAvaterColor()", hex);
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
          handleAvaterColor();
        }}
      />
      </Stack>
    </div>
  );
}

export default CirclePicker;
