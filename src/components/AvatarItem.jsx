import styled from "@emotion/styled";
import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import FormContext from "../context/FormContext";
import AlertDialog from "./AlertDialog";
import MessageLogo from "./MessageLogo";

const Input = styled("input")({
  display: "none",
});

const AvatarItem = (dialog) => {
  const [showDialog, setShowDialog] = useState(false);

  const { image, dispatch } = useContext(FormContext);

  let avatar = image.url;

  const handleUrlImage = (e) => {
    //save image file pathname
    if (e.target.files[0]) {
      const data = URL.createObjectURL(e.target.files[0]);
      // setSelectedFile(data);
      dispatch({ type: "IMAGE", payload: data });
    }
  };

  const handleCleaning = () => {
    // setSelectedFile("");
    dispatch({ type: "CLEAN_IMAGE" });
    console.log("IMAE CLEANED");
  };
  const onOpenDialog = () => {
    if (avatar && avatar.trim() !== "" && avatar.length > 0) {
      setShowDialog((preState) => !preState);
    }
  };
  return (
    <>
      {showDialog && (
        <AlertDialog
          image={avatar}
          onShowed={onOpenDialog}
          onClean={handleCleaning}
        />
      )}

      <Stack spacing={1} direction="row" alignItems="center">
        {/* Avatar */}
        <Avatar
          sx={{
            // bgcolor: 'red',
            width: 56,
            height: 56,
          }}
          src={`${avatar}`}
          onClick={onOpenDialog}
        />

        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleUrlImage}
          />
          <Button
            variant="outlined"
            component="span"
            startIcon={<PhotoCamera />}
            size="small"
          >
            {avatar.trim().length > 0 ? " Change Avatar " : "Choose an Avatar"}
          </Button>
        </label>
      </Stack>
      {/* Message Logo hehe */}
      <MessageLogo />
    </>
  );
};

export default AvatarItem;
