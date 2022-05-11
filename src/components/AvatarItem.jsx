import styled from "@emotion/styled";
import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import MessageLogo from "./MessageLogo";

const Input = styled("input")({
  display: "none",
});

const AvatarItem = (dialog) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  let avatar = selectedFile;

  const handleUrlImage = (e) => {
    //save image file pathname
    const data = URL.createObjectURL(e.target.files[0]);
    setSelectedFile(data);
    console.log(e.target.files[0].name);
  };

  const onOpenDialog = () => {
    if (avatar && avatar.trim() !== "" && avatar.length > 0) {
      setShowDialog((preState) => !preState);
    }
  };

  return (
    <>
      {showDialog && <AlertDialog image={avatar} onShowed={onOpenDialog} />}
      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar
          sx={{
            //   bgcolor: color,
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
            {avatar.trim().length > 0 ? " Shange Avatar " : "Choose an Avatar"}
          </Button>
        </label>
      </Stack>
      {/* Message Logo hehe */}
      <MessageLogo />
    </>
  );
};

export default AvatarItem;
