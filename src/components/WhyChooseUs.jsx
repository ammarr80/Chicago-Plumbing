import PlumberMan from '../pics/plumber-man.jpg';
export default function WhyChooseUs() {
    return (
        <>
             <section id="why-choose-us" className="max-w-[90%] mx-auto">
        <div
          className="grid grid-cols-2 mb-8 gap-12 max-md:grid-cols-1 items-center"
        >
          <div className="mb-8">
            <div>
              <h2 className="font-bold text-4xl mb-5">Why Choose Us</h2>
              <p
                className="text-gray-600 max-w-[60ch] leading-normal mb-3 text-base mb-14"
              >
                Fast, reliable plumbing from licensed professionals. We fix
                leaks, clogs, pipes, and water heaters with skill and honesty.
                Our team works efficiently to get your plumbing problems solved
                the same day.
              </p>

              <div
                id="why-us-cards"
                className="grid grid-cols-2 gap-5 space-y-6 mb-10 max-md:grid-cols-1 max-md:gap-10 max-md:mb-16"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-primary font-bold text-3xl">01</h4>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-lg mb-1">
                      Licensed & Experienced
                    </h5>
                    <p className="text-sm text-gray-600">
                      Our plumbers are fully licensed and trained to handle
                      residential and commercial plumbing safely and correctly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-primary font-bold text-3xl">02</h4>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-lg mb-1">
                      Fast Same-Day Service
                    </h5>
                    <p className="text-sm text-gray-600">
                      We respond quickly to emergencies and scheduled jobs to
                      prevent water damage and costly repairs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-primary font-bold text-3xl">03</h4>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-lg mb-1">
                      Clear, Upfront Pricing
                    </h5>
                    <p className="text-sm text-gray-600">
                      You get clear pricing before work starts. No hidden fees
                      or surprise charges after the job is done.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="text-primary font-bold text-3xl">04</h4>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-bold text-lg mb-2">
                      Skilled Plumbing Team
                    </h5>
                    <p className="text-sm text-gray-600">
                      We use the right tools and proven techniques to fix your
                      plumbing issues efficiently and reliably.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="tel:(312) 555-0147"
                  className="bg-primary text-white font-semibold px-6 py-4 rounded-lg"
                >
                  Call Us for Fixes</a
                >
              </div>
            </div>
          </div>
          <div className="rounded-4xl" id="grid-image">
            <img
              src={PlumberMan}
              className="self-end w-[95%] rounded-full justify-self-center"
              alt=""
            />
          </div>
        </div>
      </section>
        </>
    )
}