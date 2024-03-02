import React from "react";
import Title from "../shared/Title";
import Header from "./Header.jsx";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList.jsx";
import { sampleChats } from "../../constants/sampleData.js";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile.jsx";

const AppLayout = () => (WrappedComponent) => {
  // for deleting the chat
  function handleDeleteChat(e, _id, groupChat) {
    e.preventDefault();
    console.log("clicked on ", _id, groupChat);
  }

  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    return (
      <div>
        <Title title={"Chat App"} />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              //all chats with
              // avatar: ["https://www/w3schools.com/howto/img_avatar.png"],
              // name: "John Doe",
              // _id: "1",
              // groupChat: false,
              // members: ["1", "2"],
              chatId={chatId}
              newMessagesAlert={[{ chatId, count: 4 }]}
              onlineusers={["1", "3"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", sm: "block" },
              bgcolor: "rgba(0,0,0,0.85",
            }}
            height={"100%"}
          >
            <Profile />
          </Grid>
        </Grid>

        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
