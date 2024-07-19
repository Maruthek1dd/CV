import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaPython, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiFastapi, SiPandas } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconV = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-3xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconV(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div
          variants={iconV(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <FaPython className="text-7xl" style={{ color: "#306998" }} />
        </motion.div>
        <motion.div
          variants={iconV(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <FaDocker className="text-7xl" style={{ color: "#2496ED" }} />
        </motion.div>
        <motion.div
          variants={iconV(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <SiFastapi className="text-7xl" style={{ color: "#009688" }} />
        </motion.div>
        <motion.div
          variants={iconV(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <SiPandas className="text-7xl" style={{ color: "#150458" }} />
        </motion.div>
        <motion.div
          variants={iconV(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <FaNodeJs className="text-7xl" style={{ color: "#339933" }} />
        </motion.div>
        <motion.div
          variants={iconV(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <RiTailwindCssFill
            className="text-7xl"
            style={{ color: "#38BDF8" }}
          />
        </motion.div>
        <motion.div
          variants={iconV(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center bg-neutral-950"
        >
          <DiMysql className="text-7xl" style={{ color: "#00758F" }} />
        </motion.div>
      </div>
    </div>
  );
};
export default Technologies;
