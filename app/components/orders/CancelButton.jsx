"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "../material-component";
import { FormatRupiah } from "@arismun/format-rupiah";
import clientValidator from "@/utils/token/client-validator";
import { useRouter } from "next/navigation";
import { cancelOrder } from "@/utils/app/orders/orders";
import AlertError from "../AlertError";
import AlertSuccess from "../AlertSuccess";

export default function CancelButton({ order_id }) {
  const [alert, setAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState("error");
  const [sucMessage, setSucMessage] = React.useState("done");
  const [loading, setLoading] = React.useState(false);

  const redirect = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleCancel = async () => {
    setLoading(true);
    setAlert(false);
    await clientValidator(redirect);
    const res = await cancelOrder(order_id);
    if (res.error) {
      setErrMessage(res.message);
      setAlert(true);
      setOpen(false);
      setLoading(false);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
      return;
    }
    setSucMessage(res.message);
    setSuccess(true);
    setOpen(false);
    setTimeout(() => {
      setSuccess(false);
      window.location.reload();
    }, 5000);
  };
  return (
    <>
      <AlertError open={alert} title="Failed to Cancel" message={errMessage} />
      <AlertSuccess open={success} title="Success !" message={sucMessage} />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-xl">Confirmation !</DialogHeader>
        <DialogBody>
          <Card className="w-full shadow-none items-center ">
            <CardHeader
              floated={false}
              className="h-auto max-w-[200px] flex justify-center items-center"
            ></CardHeader>
            <CardBody className="text-center overflow-hidden text-xl flex flex-col w-full">
              <div>Are you sure to cancel this order</div>
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
            <span>No</span>
          </Button>
          <Button
            variant="gradient"
            color="black"
            onClick={handleCancel}
            loading={loading}
          >
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Button
        className="w-full flex justify-center items-center text-pdg-100 bg-transparant border border-red-500 py-1 text-red-500"
        disabled={false}
        onClick={handleOpen}
      >
        Cancel
      </Button>
    </>
  );
}
