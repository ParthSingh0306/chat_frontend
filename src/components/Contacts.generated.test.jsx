import React from "react";
import renderer, { render, screen, fireEvent } from "react-test-renderer";
import Contacts from "./Contacts";

jest.mock("../assets/logo.svg", () => "Logo");

const renderTree = (tree) => renderer.create(tree);

describe("<Contacts>", () => {
  const contacts = [
    { _id: 1, username: "User1", avatarImage: "avatar1" },
    { _id: 2, username: "User2", avatarImage: "avatar2" },
  ];
  const changeChatMock = jest.fn();
  it("should render component", () => {
    const tree = <Contacts contacts={contacts} changeChat={changeChatMock} />;
    expect(renderTree(tree).toJSON()).toMatchSnapshot();
  });
});
