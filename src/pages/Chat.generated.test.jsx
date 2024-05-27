import renderer from 'react-test-renderer';
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
import { allUsersRoute, host } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
import Chat from "./Chat";

jest.mock("react-router-dom");
jest.mock("axios");
jest.mock("socket.io-client");
jest.mock("../utils/APIRoutes");
jest.mock("../components/Contacts");
jest.mock("../components/Welcome");
jest.mock("../components/ChatContainer");

const renderTree = tree => renderer.create(tree);
describe('<Chat>', () => {
  it('should render component', () => {
    expect(renderTree(<Chat 
    />).toJSON()).toMatchSnapshot();
  });
  
});