import React from "react";
import ModMenu from "../Moderator/ModMenu";

export default function AdminMenu() {
  return (
    <>
      <ModMenu />
      <span className="dropdown-item nav-link state-options">Admin Option</span>
    </>
  );
}
