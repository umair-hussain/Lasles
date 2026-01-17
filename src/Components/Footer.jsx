import React from "react";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Social Icons Data
const socialIcons = [
  {
    icon: "/fb.png",
    link: "https://facebook.com",
  },
  {
    icon: "/twitter.png",
    link: "https://twitter.com",
  },
  {
    icon: "/social-media.png",
    link: "https://instagram.com",
  },
];

const Footer = () => {
  return (
    <section
      className="mt-45 mx-auto px-2 py-3 bg-[#F8F8F8] md:px-6 md:py-7"
      id="about"
    >
      {/* Subscribe Section */}
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl -mt-30 mx-auto bg-white shadow-[0_-8px_16px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.08)] rounded-xl px-2 py-3"
      >
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-10 md:px-5 md:py-10">
          <div>
            <h2 className="text-secondary text-[35px] font-medium w-92.5 leading-snug text-center md:text-left">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="text-p mt-3 text-center md:text-left">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          <div className="mt-10 md:mt-0">
            <Motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="font-medium bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl shadow-[0_12px_25px_-8px_rgba(245,56,56,0.45)] inline-block"
            >
              Subscribe Now
            </Motion.a>
          </div>
        </div>
      </Motion.div>

      {/* Bottom Footer */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-6xl mx-auto mt-12 mb-5 flex flex-col md:flex-row justify-between"
      >
        {/* Column 1 */}
        <Motion.div variants={fadeUp}>
          <a href="#">
            <img src="/Logo.svg" alt="logo" />
          </a>

          <p className="w-80 pt-5 text-p">
            <span className="font-bold">LaslesVPN</span> is a private virtual
            network that has unique features and has high security.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-5">
            {socialIcons.map((item, i) => (
              <Motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
              >
                <img src={item.icon} alt="social icon" className="w-6 h-6" />
              </Motion.a>
            ))}
          </div>

          <h3 className="text-[#AFB5C0] mt-5">©2026 LaslesVPN</h3>
        </Motion.div>

        {/* Column 2 */}
        <Motion.div
          variants={fadeUp}
          className="text-secondary font-bold mt-5 md:mt-0"
        >
          Product
          <ul className="font-normal text-p mt-5 space-y-2">
            {[
              "Download",
              "Pricing",
              "Locations",
              "Server",
              "Countries",
              "Blog",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-primary transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>

        {/* Column 3 */}
        <Motion.div
          variants={fadeUp}
          className="text-secondary font-bold mt-5 md:mt-0"
        >
          Engage
          <ul className="font-normal text-p mt-5 space-y-2">
            {[
              "LaslesVPN ?",
              "FAQ",
              "Tutorials",
              "About Us",
              "Privacy Policy",
              "Terms of Service",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-primary transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>

        {/* Column 4 */}
        <Motion.div
          variants={fadeUp}
          className="text-secondary font-bold mt-5 md:mt-0"
        >
          Earn Money
          <ul className="font-normal text-p mt-5 space-y-2">
            {["Affiliate", "Become Partner"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-primary transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Footer;
