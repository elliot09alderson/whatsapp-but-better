import React, { useState } from "react";
import {
  Stack,
  Dialog,
  DialogTitle,
  TextField,
  InputAdornment,
  List,
  ListItemText,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp";
import UserItem from "../shared/userItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = () => {
  const search = useInputValidation("");
  let isLoading = false;
  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log(id);
  };
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>

        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              addFriendHandler={addFriendHandler}
              isLoading={isLoading}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
