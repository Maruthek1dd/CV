import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },
});

const Hero = () => {
  return (
    <div className="flex-1 pb-40 mb-50 mt-16 border-b border-neutral-800">
      <div className="flex flex-row items-center justify-center space-x-8">
        <div>
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-3xl"
          >
            Hi! I'm Leo
          </motion.h2>
          <motion.h3
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-2xl"
          >
            Full Stack Programmer
          </motion.h3>
        </div>
        <div className="bg-red-700 h-52 w-52">
          <img src="" alt="Profile" className="h-full w-full object-cover" />
        </div>
      </div>
      <motion.p
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="text-sm leading-tight mt-36"
      >
        Transformo ideas en realidades atractivas. Con más de 2 años de
        experiencia en desarrollo web y análisis de datos.
      </motion.p>
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="mt-6 space-x-4"
      >
        <a
          href="/path/to/your/CV.pdf"
          download
          className="px-4 py-2 border border-cyan-800 text-cyan-800 rounded-lg  "
        >
          Descargar CV
        </a>
        <a
          href="mailto:youremail@example.com"
          className="px-4 py-2  text-neutral-800 rounded-lg bg-gray-300 hover:bg-gray-300"
        >
          Contactame!
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
