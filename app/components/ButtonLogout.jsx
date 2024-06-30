"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "./material-component";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonLogout() {
  const redirect = useRouter();
  const handleLogout = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    redirect.push("/login");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>Are you sure you want to quit the app?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>No</span>
          </Button>
          <Button variant="gradient" color="black" onClick={handleLogout}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Button className="flex items-center py-2 gap-1" onClick={handleOpen}>
        Logout <i class="bx bx-log-out"></i>
      </Button>
    </>
  );
}
