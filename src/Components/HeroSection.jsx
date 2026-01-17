import { motion as Motion } from "framer-motion";
import Counter from "./Counter";

const HeroSection = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="max-w-7xl mx-auto px-2 py-4 mt-5 md:px-6 md:py-7">
        <div className="flex items-center flex-col-reverse md:flex-row">
          {/* Left */}
          <div className="w-full flex flex-col gap-8 md:w-[50%] md:gap-5">
            <h1 className="text-[38px] leading-tight mt-10 md:text-[50px]">
              Want anything to be easy with{" "}
              <span className="font-bold">LaslesVPN.</span>
            </h1>

            <p className="text-p">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>

            <div className="mt-5">
              <a
                href="#"
                className="font-medium bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl
                shadow-[0_12px_25px_-8px_rgba(245,56,56,0.45)]"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="w-full relative md:w-[50%]">
            <img src="/Illustration 2.png" alt="illustration" />

            <div className="absolute top-0 float">
              <img src="/lock.svg" className="w-15 md:w-full" />
            </div>

            <div className="absolute top-20 left-5 float md:top-28 md:left-16">
              <img src="/netflix.svg" className="w-10 md:w-full" />
            </div>

            <div className="absolute top-15 right-20 float md:top-0 md:right-48">
              <img src="/play.svg" className="w-10 md:w-full" />
            </div>

            <div className="absolute top-0 right-24 float md:top-20 md:right-24">
              <img src="/chart.svg" className="w-15 md:w-full" />
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <section className="w-full max-w-7xl mx-auto mt-20 px-4 py-10
          shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-2xl">
          <div className="flex items-center justify-center gap-12 md:gap-20 xl:gap-45">
            {/* Users */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src="/user.svg" />
              <div>
                <h3 className="text-xl font-bold">
                  <Counter end={90} />+
                </h3>
                <p className="text-gray-500">Users</p>
              </div>
            </div>

            <div className="w-px h-14 bg-gray-300 hidden md:flex" />

            {/* Locations */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src="/location.svg" />
              <div>
                <h3 className="text-xl font-bold">
                  <Counter end={30} />+
                </h3>
                <p className="text-gray-500">Locations</p>
              </div>
            </div>

            <div className="w-px h-14 bg-gray-300 hidden md:flex" />

            {/* Servers */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src="/Server.svg" />
              <div>
                <h3 className="text-xl font-bold">
                  <Counter end={50} />+
                </h3>
                <p className="text-gray-500">Servers</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Motion.div>
  );
};

export default HeroSection;
