import React from "react";
import ModMenu from "../pages/Moderator/ModMenu";
import AdminMenu from "../pages/Admin/AdminMenu";
import UserMenu from "../pages/User/UserMenu";

export default function MenuDisplayer({ page }) {
  if (page === "user") {
    return <UserMenu />;
  }

  if (page === "mod") {
    return <ModMenu />;
  }

  if (page === "admin") {
    return <AdminMenu />;
  }
}
