import { motion as Motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-2 py-4 mt-5 md:px-6 md:py-7 flex flex-col md:flex-row justify-center items-center gap-8">
        
        {/* Image */}
        <Motion.div
          className="w-full md:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/Illustration 3.png" alt="illustration" />
        </Motion.div>

        {/* Content */}
        <Motion.div
          className="w-full md:w-[50%]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Motion.h2
            className="text-secondary font-medium text-4xl mt-5 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            We Provide Many <br /> Features You Can Use
          </Motion.h2>

          <Motion.p
            className="text-p mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            You can explore the features that we provide with fun and have
            their own functions each feature.
          </Motion.p>

          {/* Feature List */}
          {[
            "Powerfull online protection",
            "Internet without borders",
            "Supercharged VPN",
            "No specific time limits",
          ].map((item, index) => (
            <Motion.div
              key={index}
              className="flex gap-2 mt-5 items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src="/check.svg" alt="check" />
              <p className="text-p">{item}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
