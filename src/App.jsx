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

const SampleIcon = ({
  fill = "red",
  backgroundColor = "white",
  width = "300",
  height = "200",
  SVG,
}) => (
  <svg
    version="1.1"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100%" height="100%" fill={backgroundColor} />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill={fill}>
      {SVG}
    </text>
  </svg>
);

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
          <div>
            <SvgComponent name={name} domain={domain} fill={colorHex} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
