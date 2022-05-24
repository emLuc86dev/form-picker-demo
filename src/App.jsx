import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack, Typography } from "@mui/material";
import { useState, useContext } from "react";

import AvatarBadge from "./components/AvatarBadge";
import InputData from "./components/InputData";
import Workers from "./components/Workers";
import MessageLogo from "./components/MessageLogo";

import { ReactComponent as ImageLogo } from "./assets/siteMap.svg";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./UI/Themes";

import FormContext from "./context/FormContext";
import DataCollection from "./components/DataCollection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import IterablePicker from "./components/ColorPicker/IterablePicker";
import { SvgComponent } from "./components/ColorPicker/SvgComonent";
import imageSvg from "./assets/siteMap.svg";

function App() {
  const [color, setColor] = useState("");

  const { colorHex, domain, name } = useContext(FormContext);

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
              Logo del espacio
            </Typography>
            {/* <AvatarItem /> */}
            <AvatarBadge />
            <InputData />
            <Workers colorChanged={color} />

            <IterablePicker />

            <MessageLogo />
            <DataCollection />
          </Stack>
        </div>
        <div className="data_container">
          <SvgComponent name={name} domain={domain} fill={colorHex} />

          {/* <img src={imageSvg} alt="error loading image" width={'100%'} /> */}
        </div>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
