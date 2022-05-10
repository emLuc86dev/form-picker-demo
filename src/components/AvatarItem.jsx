import styled from "@emotion/styled";
import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import MessageLogo from "./MessageLogo";

const Input = styled("input")({
  display: "none",
});

const AvatarItem = () => {
  const [selectedFile, setSelectedFile] = useState("");
  let avatar = selectedFile;

  const handleUrlImage = (e) => {
    const data = URL.createObjectURL(e.target.files[0]);
    setSelectedFile(data);
    console.log(e.target.files[0].name);
  };

  return (
    <>
      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar
          sx={{
            //   bgcolor: color,
            width: 56,
            height: 56,
          }}
          src={`${avatar}`}
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
