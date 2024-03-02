import { Avatar, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack
      spacing={"2rem"}
      direction={"column"}
      bgcolor={"black"}
      height={"100%"}
      alignItems={"center"}
      padding={"1rem"}
    >
      <Avatar
        sx={{
          width: 200,
          height: 200,

          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard
        heading={"Bio"}
        text={"klnasddklsdklsdansadk sad asdlsmd  asd"}
      />
      <ProfileCard
        heading={"Username"}
        text={"pratikverma9691@gmail.com "}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Pratik verma"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-04T18:30:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant="body1" color={"gray"}>
          {text}
        </Typography>
        <Typography color="gray" variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default Profile;
