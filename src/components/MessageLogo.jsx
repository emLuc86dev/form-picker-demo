import { ErrorOutline } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const MessageLogo = () => {
  return (
    <>
      <Stack spacing={1} direction="row" justifyContent="flex-start">
        <ErrorOutline />
        <Box>
          <Typography variant="body1" gutterBottom>
            Este logo identificara tu espacio con el resto
          </Typography>
          <Typography variant="body1" gutterBottom>
            Preferiblemente sube una imagen .png igual a 75px por 72ppp con
            fondo transparente
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default MessageLogo;
