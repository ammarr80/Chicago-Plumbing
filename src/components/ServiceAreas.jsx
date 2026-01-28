import { MapPin } from "lucide-react";

export default function ServiceAreas() {
    return (
        <>
               <section
        id="service-areas"
        className="max-w-[90%] items-center mx-auto grid grid-cols-2 gap-6 max-md:grid-cols-1"
      >
        <div>
          <div className="max-md:mb-5">
            <h2 className="font-bold text-4xl mb-5">Our Service Areas</h2>
            <p className="text-gray-600 max-w-[53ch] leading-normal text-base mb-9">
              We proudly provide plumbing services throughout Chicago, covering
              all major neighborhoods. Whether you’re in Lincoln Park, Wicker
              Park, Lakeview, Hyde Park, or Logan Square, our team is ready to
              handle your plumbing needs quickly and reliably.
            </p>

            <ul className="space-y-4 mb-12 max-w-[40ch] grid grid-cols-2">
              <div className="flex flex-col gap-6">
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Lincoln Park</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Wicker Park</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Lakeview</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Hyde Park</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Logan Square</p>
                </li>
              </div>
              <div className="flex flex-col gap-6">
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>River North</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>South Loop</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Old Town</p>
                </li>
                <li className="flex items-center text-base gap-2 text-gray-900">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p>Gold Coast</p>
                </li>
              </div>
            </ul>
            <div className="mb-12">
              <a
                href="tel:(312) 555-0147"
                className="bg-primary text-white font-semibold px-6 py-4 rounded-lg"
              >
                Call In Your Area</a
              >
            </div>
          </div>
        </div>

        <div className="p-6 max-md:p-0 rounded-lg">
          <h4 className="font-bold text-center mb-2 text-2xl">Find Us On Map</h4>
          <p className="text-xs text-gray-500 text-center mb-5">
            (We cover all these neighborhoods — call us for fast, same-day
            service!)
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34527.82536644037!2d73.33988949522136!3d30.84203514461437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1768226888863!5m2!1sen!2s"
            className="w-full h-100 map rounded-lg mb-8 border-8 border-white"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
        </>
    )
}