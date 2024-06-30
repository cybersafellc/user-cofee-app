"use client";

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
} from "./material-component";
import { FormatRupiah } from "@arismun/format-rupiah";
import clientValidator from "@/utils/token/client-validator";
import { useRouter } from "next/navigation";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import chekout from "@/utils/app/checkout";

export default function ButtonBuy(product) {
  const redirect = useRouter();

  const [alert, setAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState("error");
  const [sucMessage, setSucMessage] = React.useState("done");
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleCheckout = async (product_id) => {
    setLoading(true);
    setAlert(false);
    await clientValidator(redirect);
    const resCheckout = await chekout(product_id, (err, data) => {
      return data;
    });
    if (resCheckout.error) {
      setErrMessage(resCheckout.message);
      setLoading(false);
      setAlert(true);
    }
    if (!resCheckout.error) {
      setSucMessage(resCheckout.message);
      setSuccess(true);
      setTimeout(() => {
        redirect.push("/orders");
      }, 4000);
    }
    return;
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <AlertError
          open={alert}
          message={errMessage}
          title="Error to Place Order"
        />
        <AlertSuccess open={success} title="Success" message={sucMessage} />
        <DialogHeader className="text-xl">Are you sure to buy?</DialogHeader>
        <DialogBody>
          <Card className="w-full shadow-none items-center ">
            <CardHeader
              floated={false}
              className="h-auto max-w-[200px] flex justify-center items-center"
            >
              <img src={product.img} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center overflow-hidden text-xl flex flex-col w-full">
              <div className="flex justify-between text-sm">
                <div className="flex gap-4">
                  <span>1x</span>
                  <span>{product.name}</span>
                </div>
                <span>
                  <FormatRupiah value={product.price} />
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex gap-4">
                  <span>Discount</span>
                </div>
                <span>0%</span>
              </div>
              <div className="flex justify-between text-sm text-black">
                <div className="flex gap-4">
                  <span>Total</span>
                </div>
                <span>
                  : <FormatRupiah value={product.price} />
                </span>
              </div>
            </CardBody>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            loading={loading}
            variant="gradient"
            color="black"
            onClick={() => handleCheckout(product.id)}
          >
            <span>Buy Now</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Button
        className={"mt-3 px-2 text-xs py-2 w-3/6 " + product.className}
        onClick={handleOpen}
        disabled={!product.stocks}
      >
        Buy Now
      </Button>
    </>
  );
}
