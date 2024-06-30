"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "./material-component";
import Container from "./Container";
import Link from "next/link";
import ButtonLogout from "./ButtonLogout";

export default function NavbarDesktop(token) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/shop" className="flex items-center">
          Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/orders" className="flex items-center">
          Orders
        </Link>
      </Typography>
      {token.refresh_token ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <ButtonLogout />
        </Typography>
      ) : (
        ""
      )}
    </ul>
  );
  return (
    <>
      <Navbar className="lg:sticky top-0 z-10 h-max max-w-full rounded-none px-4 lg:py-2 lg:px-8 lg:py-4 py-5 shadow-none lg:shadow-md">
        <Container>
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium flex gap-2 items-center"
            >
              Cofee App
            </Link>
            <div className="flex items-center gap-4">
              <div className=" hidden lg:block">{navList}</div>

              {token.refresh_token ? (
                ""
              ) : (
                <div className="flex items-center gap-x-1">
                  <Link href="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </div>
              )}

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              {token.refresh_token ? (
                ""
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className="lg:hidden inline-block"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="lg:hidden inline-block"
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </MobileNav>
        </Container>
      </Navbar>
    </>
  );
}
