import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ShowColorPiker = ({ onChange, color, close, truly = false }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (e) => {
    setOpen(false);
    //lifting state app to handle avatar click to show the image into th dialog

    if (e.target.name === "accept") {
      console.log("correctamente aceptado");
      // truly = true;
      close(true); //lifting state app "Mediator pattern"
      return;
    }
    close(); //lifting state app  "Mediator pattern"
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <SketchPicker color={color} onChange={(e) => onChange(e)} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button name="accept" onClick={handleClose}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShowColorPiker;
