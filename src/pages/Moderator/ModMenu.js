import React from "react";
import UserMenu from "../User/UserMenu";

export default function ModMenu() {
  return (
    <>
      <UserMenu />
      <span className="dropdown-item nav-link state-options">
        Moderator Option
      </span>
    </>
  );
}
