import { FormatRupiah } from "@arismun/format-rupiah";
import ButtonBuy from "../ButtonBuy";
import { Button, IconButton, Rating, Typography } from "../material-component";

export default function Main(product) {
  return (
    <>
      <div className="mx-auto container grid place-items-start grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="flex justify-center items-start overflow-hidden pt-5">
          <img src={product.img} alt="pink blazer" className="w-full" />
        </div>
        <div className="lg:pt-0 pt-5 ">
          <Typography className="mb-4" variant="h3">
            {product.name}
          </Typography>
          <Typography variant="h5">
            <FormatRupiah value={product.price} />
          </Typography>
          <div className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            <div className="text-black">Description :</div>
            <div>{product.description}</div>
            <div className="pt-5 text-black">
              Rules for shopping in our store :
            </div>
            <div>1. Buy now</div>
            <div>
              2. After the item is purchased, make a direct payment in the
              "account - orders" menu then click pay now
            </div>
            <div>
              3. After successful payment, periodically check the order status
              from pending done. If it is done, please take your coffee at the
              cashier
            </div>
          </div>
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5 (100 reviews)
            </Typography>
          </div>

          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <ButtonBuy {...product} className="py-3" />
          </div>
        </div>
      </div>
    </>
  );
}
