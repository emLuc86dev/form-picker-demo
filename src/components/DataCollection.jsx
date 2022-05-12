import React, { useCallback, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AttachEmail, Send } from "@mui/icons-material";
import CardData from "./CardData";
import FormContext from "../context/FormContext";
import { toast } from "react-toastify";

export default function DataCollection() {
  const [open, setOpen] = React.useState(false);
  const { image, name, domain, workers, colorHex, isValid, dispatch } =
    useContext(FormContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    //lifting state app to handle avatar click to show the image into th dialog
    // onShowed();
    // if (e.target.name === "clean") {
    //   onClean(); //lifting state app to clean avatar image
    // }
  };

  const handleIsValid = useCallback(() => {
    if (
      image.message.trim().length > 0 &&
      image.url.trim().length > 0 &&
      name.trim().length > 0 &&
      domain.trim().length > 0 &&
      workers.trim().length > 0 &&
      colorHex.trim().length > 0
    ) {
      //code here
      console.log(colorHex);
      dispatch({ type: "VALID", payload: true });
      return;
    }
    dispatch({ type: "VALID", payload: false });
  }, [image, name, domain, workers, colorHex, dispatch]);

  const onReset = () => {
    dispatch({ type: "RESET" });
    setOpen(false);
    toast.success("Successfully sent!")
  };

  useEffect(() => {
    handleIsValid();
  }, [handleIsValid]);

  return (
    <>
      <div>
        <Button
          variant="outlined"
          startIcon={<AttachEmail />}
          onClick={handleClickOpen}
          disabled={!isValid}
        >
          Show Data
        </Button>
      </div>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <CardData />
          </DialogContent>
          <DialogActions>
            <Button name="clean" onClick={handleClose}>
              Desagree
            </Button>

            <Button variant="outlined" startIcon={<Send />} onClick={onReset}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
