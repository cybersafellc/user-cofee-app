import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <div>
        <ul className="grid grid-cols-3 justify-items-center">
          <li>
            <Link href="/">
              <div className=" py-2 px-6 rounded-xl">
                <i className="bx bxs-home text-2xl"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <div className="bg-gray-200 py-2 px-6 rounded-xl">
                <i className="bx bxs-store text-2xl"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <div className=" py-2 px-6 rounded-xl">
                <i className="bx bxs-user text-2xl"></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
