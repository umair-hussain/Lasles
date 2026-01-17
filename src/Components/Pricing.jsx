import { motion as Motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      {/* Choose Your Plan */}
      <section className="bg-[#fbfbfb]" id="pricing">
        {/* Plan */}
        <div className="max-w-7xl mx-auto px-2 py-4 mt-5 md:px-6 md:py-10 text-center">

          {/* Heading */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-5"
          >
            <h2 className="text-secondary text-4xl font-medium">
              Choose Your Plan
            </h2>
            <p className="mt-2 text-p">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </Motion.div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mt-15">

            {/* CARD TEMPLATE */}
            {[
              {
                title: "Free Plan",
                price: "Free",
                features: [
                  "Unlimited Bandwidth",
                  "Encrypted Connection",
                  "No Traffic Logs",
                  "Works on All Devices",
                ],
              },
              {
                title: "Standard Plan",
                price: "$9 / mo",
                features: [
                  "Unlimited Bandwidth",
                  "Encrypted Connection",
                  "Yes Traffic Logs",
                  "Works on All Devices",
                  "Connect Anywhere",
                ],
              },
              {
                title: "Premium Plan",
                price: "$12 / mo",
                features: [
                  "Unlimited Bandwidth",
                  "Encrypted Connection",
                  "Works on All Devices",
                  "Connect Anywhere",
                ],
              },
            ].map((plan, index) => (
              <Motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col w-full md:w-[33.33%] justify-between items-center border-2 border-[#DDDDDD] rounded-xl h-137.5 py-10"
              >
                <div>
                  <div className="flex flex-col items-center">
                    <img src="/Free.svg" alt="plan" className="w-32.5" />
                    <h3 className="text-secondary text-xl font-medium mt-5">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-2">
                        <img src="/check2.svg" alt="" />
                        <p className="text-p">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mt-3 mb-5 font-medium">{plan.price}</h3>
                  <a
                    href="#"
                    className="font-medium text-primary border-2 px-8 py-2 rounded-4xl"
                  >
                    Select
                  </a>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Network Section */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-2 md:px-6 mt-20 text-center"
        >
          <div className="flex items-center flex-col">
            <h2 className="text-secondary text-4xl font-medium md:w-112.5">
              Huge Global Network of Fast VPN
            </h2>

            <p className="mt-5 text-p md:w-137.5">
              See <span className="font-medium">LaslesVPN</span> everywhere to
              make it easier for you when you move locations.
            </p>

            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <img src="/map.png" alt="map" />
            </Motion.div>
          </div>
        </Motion.div>
      </section>
    </>
  );
};

export default Pricing;
