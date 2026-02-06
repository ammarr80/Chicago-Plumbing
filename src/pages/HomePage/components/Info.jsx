export default function Info() {
  return (
    <>
      <ul className="flex gap-3 max-md:grid justify-between space-x-6">
        <li className="flex items-center gap-10 max-md:gap-2">
          <span className="bg-gray-600 rounded-full w-1 h-1 md:hidden"></span>
          <p className="text-base">Emergency Service</p>
          <span className="rounded-full bg-gray-600 w-1 h-1 max-md:hidden"></span>
        </li>
        <li className="flex items-center gap-10 max-md:gap-2">
          <span className="bg-gray-600 rounded-full w-1 h-1 md:hidden"></span>
          <p className="text-base">Upfront Pricing</p>
          <span className="rounded-full bg-gray-600 w-1 h-1 max-md:hidden"></span>
        </li>
        <li className="flex items-center gap-8 max-md:gap-2">
          <span className="bg-gray-600 rounded-full w-1 h-1 md:hidden"></span>
          <p className="text-base">Fully Stocked Trucks</p>
        </li>
      </ul>
    </>
  );
}
