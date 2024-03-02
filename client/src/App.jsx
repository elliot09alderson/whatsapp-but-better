import React, { Suspense, lazy } from "react";
const Home = lazy(() => import("./screens/Home"));
const Login = lazy(() => import("./screens/Login"));
const About = lazy(() => import("./screens/About"));
const Chat = lazy(() => import("./screens/Chat.jsx"));
const Groups = lazy(() => import("./screens/Groups.jsx"));
const NotFound = lazy(() => import("./screens/NotFound.jsx"));
// const Home =lazy(()=>import("./screens/Home"))
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoute from "./auth/ProtectRoute.jsx";
import LayoutLoader from "./components/layout/LayoutLoader.jsx";

let user = true;
const App = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route element={<ProtectRoute user={!user} redirect="/" />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
