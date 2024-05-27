import renderer from "react-test-renderer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { registerRoute } from "../utils/APIRoutes";
import Register from "./Register";

jest.mock("react-router-dom");
jest.mock("../assets/logo.svg");
jest.mock("axios");
jest.mock("react-hot-toast");
jest.mock("../utils/APIRoutes");

const renderTree = (tree) => renderer.create(tree);
describe("<Register>", () => {
  it("should render component", () => {
    expect(renderTree(<Register />).toJSON()).toMatchSnapshot();
  });
});
