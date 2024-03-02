import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  //   console.log(avatar);
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar?.map((i, idx) => (
            <Avatar
              key={Math.random() * 100}
              src={i}
              alt={`Avatar ${idx}`}
              style={{
                width: "2.4rem",
                height: "2.4rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + idx}rem`,
                  sm: `${idx}rem`,
                },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
