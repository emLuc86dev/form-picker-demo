import styled from "@emotion/styled";
import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Badge, IconButton, Stack } from "@mui/material";
import React, { useState, useContext } from "react";
import AlertDialog from "./AlertDialog";
import MessageLogo from "./MessageLogo";

import FormContext from "../context/FormContext";

const Input = styled("input")({
  display: "none",
});



const AvatarBadge = () => {
  const [showDialog, setShowDialog] = useState(false);

  const { image, dispatch } = useContext(FormContext);

  let avatar = image.url;

  const handleUrlImage = (e) => {
    //save image file pathname
    if (e.target.files[0]) {
      const data = URL.createObjectURL(e.target.files[0]);
      dispatch({ type: "IMAGE", payload: data });
    }
  };

  const handleCleaning = () => {
    dispatch({ type: "CLEAN_IMAGE" });
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
          image={image.url}
          onShowed={onOpenDialog}
          onClean={handleCleaning}
        />
      )}
      <Stack spacing={1} direction="row" alignItems="center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleUrlImage}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          }
        >
          <Avatar
            src={`${image.url}`}
            sx={{
              borderColor: 'red',
              width: 60,
              height: 60,
            }}
            
            onClick={onOpenDialog}
          />
        </Badge>
      </Stack>
      <MessageLogo />
    </>
  );
};

export default AvatarBadge;
