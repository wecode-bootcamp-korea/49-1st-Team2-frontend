import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import MainDetail from "./pages/MainDetail/MainDetail";
import SignUp from "./pages/SignUp/SignUp";
import SignUpComplete from "./pages/SignUpComplete/SignUpComplete";
import WriteList from "./pages/WriteList/WriteList";
import Find from "./pages/Find/Find";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mainDetail" element={<MainDetail />} />
        <Route path="/signupComplete" element={<SignUpComplete />} />
        <Route path="/writeList" element={<WriteList />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
