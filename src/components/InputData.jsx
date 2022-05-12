import React, { useContext } from "react";
import { ErrorOutline } from "@mui/icons-material";
import { Box, Stack, TextField, Typography } from "@mui/material";
import FormContext from "../context/FormContext";

const InputData = () => {
  // const [inputsData, setInputsData] = useState({
  //   nameInput: "",
  //   domainInput: "",
  // });
  // const { nameInput, domainInput } = inputsData;

  const { name, domain, dispatch } = useContext(FormContext);

  const handleInputs = (e) => {
    // setInputsData((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
    if (e.target.name.trim() !== "") {
      let saveName = e.target.name.toUpperCase();
      dispatch({ type: saveName, payload: e.target.value });
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "25px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
          Espaio de Nombre
        </Typography>

        <TextField
          fullWidth
          label="Esp. de trabajo"
          name="name"
          value={name}
          onChange={handleInputs}
        />
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
          Url del espacio (direcion web)
        </Typography>
        <TextField
          fullWidth
          label="domain"
          name="domain"
          value={domain}
          onChange={handleInputs}
        />
        <Stack
          spacing={1}
          direction="row"
          justifyContent="center"
          marginTop="5px"
        >
          <ErrorOutline />
          <Typography gutterBottom variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            molestiae labore modi perspiciatis nihil laudantium praesentium
            sapiente fuga veniam cum iste asperiores ullam eligendi, expedita
            ipsa soluta laboriosam quibusdam id? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cupiditate maiores consequuntur
            reprehenderit quasi? Delectus maxime, soluta aut, tenetur culpa
            accusantium incidunt possimus quo molestias natus itaque veritatis
            eaque, aliquid quas.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default InputData;
