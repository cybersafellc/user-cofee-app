"use client";

import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import {
  Button,
  Input,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "../material-component";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import AlertError from "../AlertError";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AlertSuccess from "../AlertSuccess";
import signup from "@/utils/app/signup/signup";

export default function Form() {
  const redirect = useRouter();

  const [alert, setAlert] = useState(false);
  const [alerMessage, setAlertMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [sucMessage, setSucMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // form state, coba coba make metode state aowkoawko
  const [firstName, setFirstName] = useState("");
  const onChangeFistName = ({ target }) => setFirstName(target.value);
  const [lastName, setLastName] = useState("");
  const onChangeLastName = ({ target }) => setLastName(target.value);
  const [username, setUsername] = useState("");
  const onChangeUsername = ({ target }) => setUsername(target.value);
  const [password, setPassword] = useState("");
  const onChangePassword = ({ target }) => setPassword(target.value);
  const [phone, setPhone] = useState("");
  const onChangePhone = ({ target }) => setPhone(target.value);
  //
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAlert(false);
    setLoading(true);
    const form = {
      username: username,
      password: password,
      phone: phone,
      first_name: firstName,
      last_name: lastName,
    };

    const signUpCall = await signup(form, (err, res) => {
      if (err) {
        setAlertMessage(err.message);
        setAlert(true);
        setLoading(false);
        return;
      } else {
        return res;
      }
    });
    if (signUpCall) {
      setSucMessage(signUpCall.message);
      setSuccess(true);
      setTimeout(() => {
        return redirect.push("/login");
      }, 2000);
    }
  };
  return (
    <>
      <AlertError open={alert} title="Login Error" message={alerMessage} />
      <AlertSuccess
        title="Success"
        open={success}
        message={sucMessage}
        btnMessage="Login"
        href="/login"
      />
      <form
        action="#"
        className="mx-auto max-w-[24rem] text-left"
        onSubmit={(e) => handleLogin(e)}
      >
        <div className="mb-6">
          <label htmlFor="name1">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              FIrst Name
            </Typography>
          </label>
          <Input
            label="First Name"
            name="name1"
            type="text"
            onChange={onChangeFistName}
            value={firstName}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name2">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Last Name
            </Typography>
          </label>
          <Input
            label="First Name"
            name="name2"
            type="text"
            value={lastName}
            onChange={onChangeLastName}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="username">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Username
            </Typography>
          </label>
          <Input
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={onChangeUsername}
          />
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
            value={password}
            onChange={onChangePassword}
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
        <div className="mb-6">
          <label htmlFor="password">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Phone Number
            </Typography>
          </label>
          <div className="relative flex w-full max-w-[24rem]">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                >
                  +62
                </Button>
              </MenuHandler>
            </Menu>
            <Input
              type="tel"
              value={phone}
              onChange={onChangePhone}
              maxLength={11}
              placeholder="81255667788"
              className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
        </div>
        <Button
          loading={loading}
          type="submit"
          color="gray"
          size="lg"
          className="mt-6 flex justify-center"
          fullWidth
        >
          sign up
        </Button>
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
          sign up with google
        </Button>
        <Typography
          variant="small"
          color="gray"
          className="!mt-4 text-center font-normal"
        >
          Already sign up?{" "}
          <Link href="/login" className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </>
  );
}
