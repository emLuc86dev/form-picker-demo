import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FormContext from "../context/FormContext";
import { Paper, Stack } from "@mui/material";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CardData() {
  const { image, name, domain, workers, colorHex, isBlur, message, dispatch } =
    useContext(FormContext);

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardMedia
        component="img"
        height="220"
        image={image.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Stack spacing={2}>
          <div className="card_data">
            <Typography
              gutterBottom
              variant="h6"
              // component="div"
            >
              Domain:
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {domain}
            </Typography>
          </div>
        </Stack>
        <Stack spacing={2}>
          <div className="card_data">
            <Typography
              gutterBottom
              variant="h6"
              // component="div"
            >
              Personas:
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {workers}
            </Typography>
          </div>
        </Stack>
        <Stack spacing={2}>
          <div className="card_data">
            <Typography
              gutterBottom
              variant="h6"
              // component="div"
            >
              Color:
            </Typography>
            <Typography variant="h6" color={colorHex} borderBottom={`1px solid ${colorHex}`}>
              {colorHex}
            </Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
