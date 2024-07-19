import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src="" alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.741, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        className="m-8 flex items-center justify-center gap-4 text-4xl"
      >
        {" "}
        {/* Ajuste el tamaño aquí */}
        <a href="https://linkedin.com/in/leonardo-marusich">
          <FaLinkedin className="text-3xl" />
        </a>
        <a href="https://github.com/Maruthek1dd">
          <FaGithub className="text-3xl" />
        </a>
        <a href="mailto:leonardomarusich96@gmail.com">
          <MdOutlineMail className="text-3xl" />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
