import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const workerslist = ["Solo yo", "11-25", "26-50", "51-100", "500+"];

const Workers = ({ colorChanged }) => {
  // const [color, setColor] = useState("");
  const [alignment, setAlignment] = React.useState("");
  // const [amountWorker, setAmountWorker] = useState("");

  const { colorHex,  dispatch } = useContext(FormContext);

  // const handleColor = () => {
  //   setColor(colorChanged);
  // };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    // console.log(alignment);
  };

  const handleAmountWorker = (e) => {
    // setAmountWorker((preState) => ({
    //   ...preState,
    //   [e.target.name]: e.currentTarget.value,
    // }));
    // console.log(amountWorker.toggleButton);
    const toggleButton = e.currentTarget.value;
    dispatch({ type: "WORKERS", payload: toggleButton });
  };
  return (
    <>
      <Box
        // component="form"
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "25px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontWeight: "bold", marginTop: "45px" }}
        >
          Cuantas personas trabajan contigo, incluyendote a ti?
        </Typography>

        {/* Workeres amount here */}

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          //   aria-label="text alignment"
        >
          {/* <div className="workers"> */}
          {workerslist.map((worker, index) => {
            return (
              <ToggleButton
                key={index}
                sx={{
                  borderColor: colorHex,
                  marginRight: "10px",
                }}
                value={worker}
                name="toggleButton"
                // aria-label="left aligned"
                onClick={handleAmountWorker}
              >
                {worker}
              </ToggleButton>
            );
          })}
          {/* </div> */}
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default Workers;
