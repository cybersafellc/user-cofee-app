export default function Menu() {
  return (
    <>
      <div className="lg:mt-5 mb-5">
        <div className="block">
          <nav className="flex lg:gap-6 gap-2" aria-label="Tabs">
            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 bg-gray-100 text-gray-700"
            >
              All Orders
            </a>
            {/* <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              Processing
            </a> */}
            <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium hover:bg-gray-50 text-gray-500"
            >
              Cancel
            </a>
            {/*     <a
              href="#"
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              Done
            </a> */}
          </nav>
        </div>
      </div>
    </>
  );
}
