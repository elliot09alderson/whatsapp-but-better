import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UserItem from "../shared/userItem";
import { sampleUsers } from "../../constants/sampleData";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  useEffect(() => {
    console.log(selectedMembers);
  }, [selectedMembers]);

  function selectGroupMemberHandler(id) {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }
  const groupName = useInputValidation();
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <Dialog open>
      <Stack width={"25rem"} p={{ xs: "1rem", sm: "2rem" }} spacing={"1.5rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField
          label="Group"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="h5" ml={"1rem"}>
          Members
        </Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectGroupMemberHandler}
              isAlreadySelected={selectedMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
