import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Reviews() {
  const GAP = 20;
  const cardCount = 6;

  let firstTrackOn = true;

  let x = 0;
  const speed = 1; // pixels per frame

  const cardRef = useRef(null);
  const trackRef = useRef(null);
  useEffect(() => {

    let cardWidth = cardRef.current.offsetWidth + GAP;
    const loopWidth = cardWidth * cardCount;
    function animate() {

      if (firstTrackOn) {
        x += speed;
      }

      if (x >= loopWidth) {
        x -= loopWidth; // subtract instead of resetting to 0
      }

      trackRef.current.style.transform = `translateX(${-x}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

    const GAP2 = 20;
    const cardAmount2 = 5;
    
    let loopWidth2 = useRef(0);
    const cardRef2 = useRef(null);
    const trackRef2 = useRef(null);
    
    let x2 = useRef(0);
    let speed2 = 1;
    let cardWidth2 = useRef(0);

    useEffect(() => {
        cardWidth2.current = cardRef2.current.offsetWidth + GAP2;
        loopWidth2.current = cardWidth2.current * cardAmount2;
        x2.current = -loopWidth2.current;
        function animate2() {
            x2.current+=speed2;

            trackRef2.current.style.transform = `translateX(${x2.current}px)`;
            requestAnimationFrame(animate2)

            if (x2.current == 0) {
                x2.current -= loopWidth2.current;
            }
        }
        animate2()
    }, [])

  return (
    <>
      <section id="reviews" className="max-w-[90%] mx-auto">
        <div>
          <div className="grid grid-cols-2 items-center justify-center mb-5 max-md:grid-cols-1">
            <div>
              <h2 className="font-bold text-4xl mb-5">What People Say</h2>
              <p className="text-gray-600 max-w-[60ch] leading-normal text-base mb-12">
                Our customers’ satisfaction is our top priority. Every review
                reflects our commitment to providing clear, professional service
                with attention to detail. We value honesty, reliability, and
                efficiency, making sure each experience is smooth, trustworthy,
                and exceeds expectations.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 max-md:mb-8 max-md:hidden">
              <h3 className="font-bold text-xl">How Was The Experience?</h3>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/A1+Popular+PPRC+Pipes+and+Fittings/@30.8048198,73.3896325,13z/data=!4m12!1m2!2m1!1splumbing+supply+store!3m8!1s0x3922a7a77fa70609:0x2157f8e3ce3eccd7!8m2!3d30.8048198!4d73.4617303!9m1!1b1!15sChVwbHVtYmluZyBzdXBwbHkgc3RvcmVaFyIVcGx1bWJpbmcgc3VwcGx5IHN0b3JlkgENcGlwZV9zdXBwbGllcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSYWJuUlBablIzUlJBQuABAPoBBAgAECg!16s%2Fg%2F11l30bzxn9?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
                className="flex items-center bg-primary font-bold text-white py-2 px-3 rounded-lg shadow-md cursor-pointer gap-1"
              >
                <i data-lucide="message-circle-more"></i>
                <span className="">Write A Review</span>
              </a>
            </div>
          </div>
          <div className="relative w-full overflow-hidden px-6 space-y-8 mb-16">
            <div className="relative w-full overflow-hidden">
              <div
                id="track"
                ref={trackRef}
                className="flex scrollbar-hide gap-5 "
              >
                <div
                  ref={cardRef}
                  className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start"
                >
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The plumbers came on time and fixed everything properly. I
                      am very happy with their work and would call them again.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">John Doe</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      Quick response and great work. They ensured everything was
                      fixed properly and left no mess.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Ethan Scott</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      They replaced the bathroom sink and everything works
                      perfectly. Friendly and professional team.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Grace Young</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The plumbers were careful, explained everything, and fixed
                      the issue quickly. Very happy with their work.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Henry Lewis</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      Very professional and polite team. They fixed everything
                      correctly and left no mess behind.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Lily Robinson</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      I called them in the morning and they arrived the same
                      day. The work was done well and they were polite and
                      careful.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">David Kim</p>
                      <p className="text-sm text-gray-500">Apartment Owner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The plumbers came on time and fixed everything properly. I
                      am very happy with their work and would call them again.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">John Doe</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      Quick response and great work. They ensured everything was
                      fixed properly and left no mess.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Ethan Scott</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      They replaced the bathroom sink and everything works
                      perfectly. Friendly and professional team.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Grace Young</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The plumbers were careful, explained everything, and fixed
                      the issue quickly. Very happy with their work.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Henry Lewis</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      Very professional and polite team. They fixed everything
                      correctly and left no mess behind.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">Lily Robinson</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-2">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>

                  <div className="review-card-info-1 h-full flex flex-col justify-between">
                    <p className="mb-5">
                      I called them in the morning and they arrived the same
                      day. The work was done well and they were polite and
                      careful.
                    </p>
                    <div className="info-1">
                      <p className="font-bold">David Kim</p>
                      <p className="text-sm text-gray-500">Apartment Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full overflow-hidden">
              <div id="track-2" ref={trackRef2} className="flex gap-5">
                <div ref={cardRef2} className="cards-2 min-w-[300px] min-h-[80px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The team was fast, polite, and explained each step.
                      Everything works perfectly now.
                    </p>
                    <div className="info">
                      <p className="font-bold">Chloe Adams</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      They repaired the broken pipe and tested everything
                      carefully. I feel relieved knowing my plumbing is now safe
                      and reliable.
                    </p>
                    <div className="info">
                      <p className="font-bold">Liam Davis</p>
                      <p className="text-sm text-gray-500">Landlord</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The plumbers were polite and professional. They explained
                      what was wrong, fixed it well, and left everything clean.
                      I am very satisfied.
                    </p>
                    <div className="info">
                      <p className="font-bold">Sophia Taylor</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      I had a small leak, and they fixed it quickly. They were
                      careful not to damage anything and explained how to avoid
                      problems in the future.
                    </p>
                    <div className="info">
                      <p className="font-bold">Noah Anderson</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      They installed a new sink and it works perfectly. They
                      were careful, explained everything, and I feel confident
                      with their work.
                    </p>
                    <div className="info">
                      <p className="font-bold">Ava Thomas</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>
                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The team was fast, polite, and explained each step.
                      Everything works perfectly now.
                    </p>
                    <div className="info">
                      <p className="font-bold">Chloe Adams</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      They repaired the broken pipe and tested everything
                      carefully. I feel relieved knowing my plumbing is now safe
                      and reliable.
                    </p>
                    <div className="info">
                      <p className="font-bold">Liam Davis</p>
                      <p className="text-sm text-gray-500">Landlord</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      The plumbers were polite and professional. They explained
                      what was wrong, fixed it well, and left everything clean.
                      I am very satisfied.
                    </p>
                    <div className="info">
                      <p className="font-bold">Sophia Taylor</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      I had a small leak, and they fixed it quickly. They were
                      careful not to damage anything and explained how to avoid
                      problems in the future.
                    </p>
                    <div className="info">
                      <p className="font-bold">Noah Anderson</p>
                      <p className="text-sm text-gray-500">Tenant</p>
                    </div>
                  </div>
                </div>

                <div className="cards-2 min-w-[300px] min-h-[100px] bg-white rounded-xl flex flex-col justify-between p-4 snap-start">
                  <div className="flex space-x-1 mb-3">
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                    <Star
                      className="p-1 w-6 h-6 rounded-full bg-primary"
                      fill="#fff"
                      stroke="0"
                    />
                  </div>
                  <div className="review-info-container h-full flex flex-col justify-between">
                    <p className="mb-5">
                      They installed a new sink and it works perfectly. They
                      were careful, explained everything, and I feel confident
                      with their work.
                    </p>
                    <div className="info">
                      <p className="font-bold">Ava Thomas</p>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 max-md:mb-8 md:hidden">
            <h3 className="font-bold text-xl">How Was The Experience?</h3>
            <a className="flex items-center bg-primary font-bold text-white py-2 px-3 rounded-lg shadow-md hover:-translate-y-1 duration-300 transition-all cursor-pointer gap-1">
              <i data-lucide="message-circle-more"></i>
              <span href="" className="">
                Write A Review
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
