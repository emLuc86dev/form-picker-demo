import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AlertDialog({ image, onShowed }) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    if (image) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    //lifting state app to handle avatar click to show the image into th dialog
    onShowed();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="data_container">
              <img
                className="img"
                src={image}
                alt="DOFLEINI DOMAIN"
                width="100%"
                height="100%"
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
