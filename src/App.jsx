import "./App.css";
import CirclePicker from "./components/CirclePicker";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography } from "@mui/material";
// import { deepOrange } from '@mui/material/colors'
import { useState } from "react";

import AvatarItem from "./components/AvatarItem";
import InputData from "./components/InputData";
import Workers from "./components/Workers";
import MessageLogo from "./components/MessageLogo";

import image from "./assets/siteMap.svg";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./UI/Themes";

function App() {
  const [color, setColor] = useState("");

  const [selectedFile, setSelectedFile] = useState("");

  const handleColor = (hex) => {
    setColor(hex);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="main_container">
        <CssBaseline />
        <div className="data_container">
          <Stack spacing={1}>
            <Typography variant="h5" gutterBottom>
              Configuracion
            </Typography>
            <Typography variant="h6" gutterBottom>
              Logo del esacio
            </Typography>
            <AvatarItem />
            <InputData />
            <Workers />
            <CirclePicker avatarColor={handleColor} />
            <MessageLogo />
          </Stack>
        </div>
        <div className="data_container">
          <img
            className="img"
            src={image}
            alt="DOFLEINI DOMAIN"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
