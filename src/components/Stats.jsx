export default function Stats() {
  return (
    <>
      <ul class="flex gap-3 max-md:grid">
        <li class="flex items-center gap-8 max-md:gap-2">
          <span class="bg-gray-600 rounded-full w-1 h-1 md:hidden"></span>
          <p class="text-base">Same-Day & Emergency Service</p>
          <span class="rounded-full bg-gray-600 w-1 h-1 max-md:hidden"></span>
        </li>
        <li class="flex items-center gap-8 max-md:gap-2">
          <span class="bg-gray-600 rounded-full w-1 h-1 md:hidden"></span>
          <p class="text-base">Upfront Pricing</p>
          <span class="rounded-full bg-gray-600 w-1 h-1 max-md:hidden"></span>
        </li>
        <li class="flex items-center gap-8 max-md:gap-2">
          <span class="bg-gray-600 rounded-full w-1 h-1 md:hidden"></span>
          <p class="text-base">Fully Stocked Trucks</p>
        </li>
      </ul>
    </>
  );
}
