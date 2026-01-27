export default function Stats() {
  return (
    <>
      <section
        id="stats"
        className="max-w-[90%] mx-auto bg-[#008cff]/10 rounded-lg py-14"
      >
        <div className="flex items-center text-center justify-around gap-8 max-md:flex max-md:flex-col max-md:gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="text-primary font-extrabold text-4xl">500+</h3>
            <p className="text-sm">Jobs Completed</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-primary font-extrabold text-4xl">300+</h3>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-primary font-extrabold text-4xl">15+</h3>
            <p className="text-sm">Years in Business</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-primary font-extrabold text-4xl">24/7</h3>
            <p className="text-sm">Emergency Service</p>
          </div>
        </div>
      </section>
    </>
  );
}
