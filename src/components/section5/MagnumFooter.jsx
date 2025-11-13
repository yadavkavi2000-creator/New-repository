import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const MagnumFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#3e1f0f] via-[#2b130a] to-[#1a0905] text-[#f7e7c3] py-14 overflow-hidden">
      {/* ✨ Animated background shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      />

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* 🍫 Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-[#d4af37] tracking-wide mb-4">
            MAGNUM
          </h2>
          <p className="text-sm leading-relaxed text-[#f1d7b6]">
            The ultimate indulgence in chocolate, crafted for true pleasure
            seekers. Because when it comes to luxury ice cream — More is More.
          </p>
        </motion.div>

        {/* 📋 Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#f1d7b6]">
            <li className="hover:text-[#d4af37] transition duration-300 cursor-pointer">
              Products
            </li>
            <li className="hover:text-[#d4af37] transition duration-300 cursor-pointer">
              Stories
            </li>
            <li className="hover:text-[#d4af37] transition duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:text-[#d4af37] transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </motion.div>

        {/* 🌐 Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-[#5a3515] hover:bg-[#d4af37] text-[#f1d7b6] hover:text-[#2b130a] transition"
            >
              <FaFacebookF size={18} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-[#5a3515] hover:bg-[#d4af37] text-[#f1d7b6] hover:text-[#2b130a] transition"
            >
              <FaInstagram size={18} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-[#5a3515] hover:bg-[#d4af37] text-[#f1d7b6] hover:text-[#2b130a] transition"
            >
              <FaTwitter size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-[#5a3515] pt-4 text-center text-sm text-[#f1d7b6]">
        © 2025 Magnum Ice Cream. All rights reserved.
      </div>
    </footer>
  );
};

export default MagnumFooter;
