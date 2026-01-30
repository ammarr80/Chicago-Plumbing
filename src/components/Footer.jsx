export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-primary max-md:py-6">
      <div className="max-w-[90%] mx-auto">
        <div className="py-6 max-md:px-0 max-md:py-0 md:hidden">
          <h4 className="font-bold text-center text-white text-xl mb-1">
            Got A Problem?
          </h4>
          <p className="text-white text-center text-sm mb-3">
            Fill out the form below and get it fixed!
          </p>
          <form
            action=""
            autocomplete="off"
            className="bg-white px-4 py-6 shadow-md rounded-lg space-y-5 mb-12"
          >
            <div className="flex flex-col">
              <label
                className="mb-2 text-sm font-semibold cursor-pointer"
                for="name"
                >Full Name</label
              >
              <input
                required
                className="px-4 py-2 rounded-sm text-sm"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div
              className="flex items-center justify-between gap-12 max-md:flex max-md:flex-col max-md:gap-4"
            >
              <div className="flex-col flex w-full max-md:w-full">
                <label
                  className="mb-2 text-sm font-semibold cursor-pointer"
                  for="tell"
                  >Phone</label
                >
                <input
                  required
                  className="px-4 py-2 rounded-sm text-sm"
                  type="tell"
                  name="tell"
                  id="tell"
                />
              </div>
              <div className="flex flex-col w-full max-md:w-full">
                <label
                  className="mb-2 text-sm font-semibold cursor-pointer"
                  for="email"
                  >Email</label
                >
                <input
                  className="px-4 py-2 rounded-sm text-sm"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="mb-2 text-sm font-semibold cursor-pointer"
                for="adress"
                >Address</label
              >
              <input
                required
                className="px-4 py-2 rounded-sm text-sm"
                type="text"
                name="adress"
                id="adress"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="mb-2 text-sm font-semibold cursor-pointer"
                for="problem-desc"
                >Problem Description</label
              >
              <textarea
                required
                className="px-4 py-2 rounded-sm text-sm"
                rows="6"
                name="problem-desc"
                id="problem-desc"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary px-6 max-md:px-3 max-md:py-3 shadow-md cursor-pointer py-4 rounded-lg text-white font-semibold shadow-md"
              >
                Get Problem Fixed
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 sm:gap-6 max-md:grid-cols-1">
          <div className="space-y-20 py-6 max-md:pb-0">
            <div>
              <h2 className="font-bold text-white text-3xl mb-3 max-md:text-2xl">
                Chicago Plumbing
              </h2>
              <p
                className="text-base max-md:text-sm text-white leading-normal tracking-wide max-w-[50ch]"
              >
                We provide reliable plumbing services for homes and businesses.
                Our team focuses on quality work, clear pricing, and fast
                response times.
              </p>
            </div>
            <div className="">
              <div className="grid grid-cols-2 text-white">
                <div className="space-y-20">
                  
                  <div>
                    <h3 className="font-bold text-lg">Company</h3>
                    <ul className="font-semibold mt-2 space-y-1">
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Home</a
                        >
                      </li>
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >About Us</a
                        >
                      </li>
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Contact</a
                        >
                      </li>
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Service Areas</a
                        >
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">Services</h3>
                    <ul className="font-semibold mt-2 space-y-1">
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Emergency Plumbing</a
                        >
                      </li>
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Drain Cleaning</a
                        >
                      </li>
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Water Heater Repair</a
                        >
                      </li>
                      <li>
                        <a href="#" className="no-underline hover:underline"
                          >Pipe Replacement</a
                        >
                      </li>
                      <li>
                        <a href="/services.html" className="no-underline hover:underline"
                          >View All Services</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">Info</h3>
                  <ul className="font-semibold mt-2 space-y-1">
                    <li>
                      <a href="#" className="no-underline hover:underline"
                        >License</a
                      >
                    </li>
                    <li>
                      <a href="#" className="no-underline hover:underline"
                        >Reviews</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 max-md:px-0 max-md:py-0 max-md:hidden">
            <h4 className="font-bold text-center text-white text-xl mb-1">
              Got A Problem?
            </h4>
            <p className="text-white text-center text-sm mb-3">
              Fill out the form below and get it fixed!
            </p>
            <form
              action="https://formspree.io/f/mnjpabvj"
              method="POST"
              autocomplete="off"
              className="bg-white px-4 py-6 shadow-md rounded-lg space-y-5"
            >
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm font-semibold cursor-pointer"
                  for="name"
                  >Full Name</label
                >
                <input
                  required
                  className="px-4 py-2 rounded-sm text-sm"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
                <div className="flex-col flex w-full max-md:w-full">
                  <label
                    className="mb-2 text-sm font-semibold cursor-pointer"
                    for="tell"
                    >Phone</label
                  >
                  <input
                    required
                    className="px-4 py-2 rounded-sm text-sm"
                    type="tell"
                    name="tell"
                    id="tell"
                  />
                </div>
                <div className="flex flex-col w-full max-md:w-full">
                  <label
                    className="mb-2 text-sm font-semibold cursor-pointer"
                    for="email"
                    >Email</label
                  >
                  <input
                    required
                    className="px-4 py-2 rounded-sm text-sm"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm font-semibold cursor-pointer"
                  for="adress"
                  >Address</label
                >
                <input
                  required
                  className="px-4 py-2 rounded-sm text-sm"
                  type="text"
                  name="adress"
                  id="adress"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-2 text-sm font-semibold cursor-pointer"
                  for="problem-desc"
                  >Problem Description</label
                >
                <textarea
                  className="px-4 py-2 rounded-sm text-sm"
                  rows="6"
                  name="problem-desc"
                  id="problem-desc"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary px-6 max-md:px-3 max-md:py-3 shadow-md hover:-translate-y-1 transition-all duration-300 transform cursor-pointer py-4 rounded-lg text-white font-semibold shadow-md transform"
                >
                  Get Problem Fixed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
