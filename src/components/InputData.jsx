import { ErrorOutline } from "@mui/icons-material";
import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const InputData = () => {
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
          sx={{
            marginBottom: "25px",
          }}
          id="outlined-basic"
          fullWidth
          label="Esp. de trabajo"
          variant="outlined"
        />
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
          Url del espacio (direcion web)
        </Typography>
        <TextField
        //   sx={{
        //     marginBottom: "25px",
        //   }}
          id="outlined-basic"
          fullWidth
          label="Url del espacio"
          variant="outlined"
          //   helperText="Please enter your name"
        />
        <Stack spacing={1} direction="row" justifyContent="center">
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
