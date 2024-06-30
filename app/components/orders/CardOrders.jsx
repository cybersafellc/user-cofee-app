import { FormatRupiah } from "@arismun/format-rupiah";
import { Button } from "../material-component";
import CancelButton from "./CancelButton";
import Link from "next/link";

export default function CardOrder(order) {
  return (
    <>
      <div className="w-full border shadow rounded-xl">
        <div className="bg-gray-100 border-b p-3 text-xs flex justify-between">
          <div>
            <div className="text-gray-600">Order Placed</div>
            <div>
              {new Date(order.date).getDate()}-{new Date(order.date).getMonth()}
              -{new Date(order.date).getFullYear()}
            </div>
          </div>
          <div>
            <div className="text-gray-600">Total</div>
            <div>
              <FormatRupiah value={order.total} />
            </div>
          </div>
          <div>
            <div className="hidden lg:block">ID {order.id}</div>
            <div className="lg:hidden">ID****</div>
          </div>
        </div>
        <div className="p-3">
          <div className="text-sm">
            {order.processing ? (
              <span className="px-3 py-1 bg-blue-100 rounded-2xl text-blue-500">
                Processing <i class="bx bxs-time-five"></i>
              </span>
            ) : (
              ""
            )}

            {order.done ? (
              <span className="px-3 py-1 bg-green-100 rounded-2xl text-green-500">
                Done <i class="bx bx-check"></i>
              </span>
            ) : (
              ""
            )}

            {order.pending_payment ? (
              <span className="px-3 py-1 bg-yellow-100 rounded-2xl text-yellow-800">
                Pending Payment <i class="bx bx-wallet"></i>
              </span>
            ) : (
              ""
            )}

            {order.cancel ? (
              <span className="px-3 py-1 bg-red-100 rounded-2xl text-red-500">
                Cancel <i class="bx bx-x-circle"></i>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="grid grid-cols-4 mt-3 gap-2">
            <div className="w-full border rounded-xl overflow-hidden shadow max-w-[100px]">
              <img src={order?.product_details?.img} />
            </div>
            <div className="col-span-2">
              <p>{order?.product_details?.name}</p>
              <p className="text-gray-500 text-xs">Quantity: 1</p>
            </div>
            <div className="flex flex-col gap-2">
              {order.pending_payment ? (
                <CancelButton order_id={order.id} />
              ) : (
                ""
              )}
              {order.processing || order.done || order.cancel ? (
                ""
              ) : (
                <Link href={order.payment_link}>
                  <Button
                    className="w-full flex justify-center items-center text-yellow-800 bg-transparant border border-yellow-800 py-1 "
                    disabled={false}
                  >
                    Pay
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
