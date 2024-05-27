import renderer from 'react-test-renderer';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { loginRoute } from "../utils/APIRoutes";
import toast from "react-hot-toast";
import Login from "./Login";

jest.mock("axios");
jest.mock("react-router-dom");
jest.mock("../assets/logo.svg");
jest.mock("../utils/APIRoutes");
jest.mock("react-hot-toast");

const renderTree = tree => renderer.create(tree);
describe('<Login>', () => {
  it('should render component', () => {
    expect(renderTree(<Login 
    />).toJSON()).toMatchSnapshot();
  });
  
});