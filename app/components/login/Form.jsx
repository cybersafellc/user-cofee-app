"use client";

import React, { useState } from "react";
import { Button, Input, Typography } from "../material-component";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import AlertError from "../AlertError";
import { login } from "@/utils/app/login/login";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Form() {
  const redirect = useRouter();

  const [alert, setAlert] = useState(false);
  const [alerMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAlert(false);
    setLoading(true);
    const form = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const loginCall = await login(form, (err, res) => {
      if (err) {
        setAlertMessage(err.message);
        setAlert(true);
        setLoading(false);
        return;
      } else {
        return res;
      }
    });
    if (loginCall) {
      setCookie("access_token", loginCall.data.access_token);
      setCookie("refresh_token", loginCall.data.refresh_token);
      return redirect.push("/");
    }
  };
  return (
    <>
      <AlertError open={alert} title="Login Error" message={alerMessage} />
      <form
        action="#"
        className="mx-auto max-w-[24rem] text-left"
        onSubmit={(e) => handleLogin(e)}
      >
        <div className="mb-6">
          <label htmlFor="email">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Username
            </Typography>
          </label>
          <Input label="Username" name="username" type="text" />
        </div>
        <div className="mb-6">
          <label htmlFor="password">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Password
            </Typography>
          </label>
          <Input
            name="password"
            label="Password"
            className="w-full placeholder:opacity-100 "
            type={passwordShown ? "text" : "password"}
            icon={
              <i onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </i>
            }
          />
        </div>
        <Button
          loading={loading}
          type="submit"
          color="gray"
          size="lg"
          className="mt-6 flex justify-center"
          fullWidth
        >
          sign in
        </Button>
        <div className="!mt-4 flex justify-end">
          <Typography
            disabled
            as="a"
            href="#"
            color="blue-gray"
            variant="small"
            className="font-medium line-through"
          >
            Forgot password
          </Typography>
        </div>
        <Button
          variant="outlined"
          size="lg"
          className="mt-6 flex h-12 items-center justify-center gap-2"
          fullWidth
          disabled
        >
          <img
            src={`https://www.material-tailwind.com/logos/logo-google.png`}
            alt="google"
            className="h-6 w-6"
          />{" "}
          sign in with google
        </Button>
        <Typography
          variant="small"
          color="gray"
          className="!mt-4 text-center font-normal"
        >
          Not registered?{" "}
          <Link href="/signup" className="font-medium text-gray-900">
            Create account
          </Link>
        </Typography>
      </form>
    </>
  );
}
