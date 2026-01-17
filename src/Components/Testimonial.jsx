import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

const testimonials = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    image: "/Viezh.png",
    text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    image: "/yessica.svg",
    text: "“I like it because I like to travel far and still can connect with high speed.”",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    image: "/kim.svg",
    text: "I didn’t expect such great quality, but this VPN surprised me. Fast, secure, and problem-free. Definitely one of the best services I’ve used.",
  },
  {
    name: "Alex John",
    location: "New York, USA",
    rating: "4.8",
    image: "/Viezh.png",
    text: "Amazing service! The connection is stable and secure, and I’ve had zero issues since day one. This VPN has become my go-to choice",
  },
  {
    name: "Maria Lopez",
    location: "Madrid, Spain",
    rating: "4.7",
    image: "/yessica.svg",
    text: "This VPN has been an excellent experience for me. The performance is smooth, reliable, and exactly what I was looking for. Highly recommended!",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCards = () => {
      setCardsToShow(window.innerWidth >= 640 ? 3 : 1);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = testimonials.length - cardsToShow;

  const nextSlide = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <Motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-2 mb-15 md:px-6 mt-5 text-center" id="testimonial">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center flex-col"
        >
          <h2 className="text-secondary text-4xl font-medium md:w-112.5">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="mt-5 text-p md:w-137.5">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </Motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Slider */}
        <div className="overflow-hidden">
          <Motion.div
            className="flex"
            animate={{
              x: `-${current * (100 / cardsToShow)}%`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((item, index) => (
              <Motion.div
                key={index}
                className="w-full sm:w-1/3 px-3 shrink-0"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-full border-2 border-[#DDDDDD] rounded-md p-6">
                  {/* Header */}
                  <div className="flex flex-col justify-between items-center lg:flex-row">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="pl-4">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-p text-sm">{item.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>{item.rating}</span>
                      <img src="/rating.svg" className="w-4" />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="mt-4 text-sm">{item.text}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-10 px-3">
          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-primary bg-primary text-white flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default Testimonial;
