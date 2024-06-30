import Link from "next/link";
import ButtonBuy from "./ButtonBuy";
import { Card, CardHeader, CardBody } from "./material-component";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function CofeeCard(product) {
  return (
    <div className={!product.stocks ? "opacity-50" : ""}>
      <Card
        className="mt-6 w-full shadow-none border-none p-0 "
        id={product.id}
      >
        <CardHeader
          color="blue-gray"
          className="relative h-[150px] m-0 flex justify-center items-center bg-white shadow-gray border"
          floated={false}
        >
          <img src={product.img} alt="card-image" />
        </CardHeader>
        <CardBody className="p-0 mt-3">
          <div className="flex flex-col px-2">
            <span variant="h5" color="blue-gray" className="mb-2 capitalize">
              {product.name}
            </span>
            <span>
              <FormatRupiah value={product.price} />
            </span>
          </div>
          <div className="flex justify-between" aria-disabled>
            <ButtonBuy {...product} />

            <Link
              href={!product.stocks ? "#" : `/products?id=${product.id}`}
              className="mt-3 px-2 text-xs bg-transparant text-black shadow-none flex items-center gap-1 py-0"
            >
              Details <i className="bx bx-right-top-arrow-circle text-xl"></i>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
