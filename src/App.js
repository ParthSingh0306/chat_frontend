import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./components/SetAvatar";
import ToasterComponent from "./components/ToasterComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setavatar" element={<SetAvatar />} />
      </Routes>
      <ToasterComponent />
    </BrowserRouter>
  );
};
export default App;
