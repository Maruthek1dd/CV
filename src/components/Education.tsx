import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

const derM = (delay: number): Variants => ({
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay },
  },
});

const izqM = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay },
  },
});

const titleVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.741, 0.2, 1.01],
      delay: delay,
      scale: {
        type: "spring",
        damping: 15,
        stiffness: 50,
        restDelta: 0.001,
      },
    },
  },
});

export const Education = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const titleTrigger = scrollY + windowHeight * 0.5;
      const trigger1 = scrollY + windowHeight * 0.6;
      const trigger2 = scrollY + windowHeight * 0.6;
      const trigger3 = scrollY + windowHeight * 0.7;
      const trigger4 = scrollY + windowHeight * 0.7;

      const titleElement = document.getElementById("title");
      const item1Element = document.getElementById("item1");
      const item2Element = document.getElementById("item2");
      const item3Element = document.getElementById("item3");
      const item4Element = document.getElementById("item4");

      if (titleElement && titleElement.offsetTop < titleTrigger) {
        titleControls.start("visible");
      }
      if (item1Element && item1Element.offsetTop < trigger1) {
        controls1.start("visible");
      }
      if (item2Element && item2Element.offsetTop < trigger2) {
        controls2.start("visible");
      }
      if (item3Element && item3Element.offsetTop < trigger3) {
        controls3.start("visible");
      }
      if (item4Element && item4Element.offsetTop < trigger4) {
        controls4.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls1, controls2, controls3, controls4, titleControls]);

  return (
    <div className="border-b border-neutral-800 pb-24 mt-4">
      <motion.h1
        id="title"
        variants={titleVariants(0.1)}
        initial="hidden"
        animate={titleControls}
        className="my-20 text-center text-3xl"
      >
        Education
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        <motion.div
          id="item1"
          variants={izqM(0.1)}
          initial="hidden"
          animate={controls1}
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-950 w-full max-w-md mx-auto"
        >
          <h2 className="text-xl text-cyan-600">
            Technical Degree in Programming
          </h2>
          <p className="text-neutral-300">UTN Villa Maria</p>
          <p className="text-neutral-500">2022 - 2024</p>
        </motion.div>
        <motion.div
          id="item2"
          variants={derM(0.1)}
          initial="hidden"
          animate={controls2}
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-950 w-full max-w-md mx-auto"
        >
          <h2 className="text-xl text-cyan-600">
            Master's Degree in Data Science
          </h2>
          <p className="text-neutral-300">Codo a Codo</p>
          <p className="text-neutral-500">2022</p>
        </motion.div>
        <motion.div
          id="item3"
          variants={izqM(0.1)}
          initial="hidden"
          animate={controls3}
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-950 w-full max-w-md mx-auto"
        >
          <h2 className="text-xl text-cyan-600">Master's Degree in NodeJs</h2>
          <p className="text-neutral-300">UTN Cordoba</p>
          <p className="text-neutral-500">2023</p>
        </motion.div>
        <motion.div
          id="item4"
          variants={derM(0.1)}
          initial="hidden"
          animate={controls4}
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-950 w-full max-w-md mx-auto"
        >
          <h2 className="text-xl text-cyan-600">
            Introductory Programming Course
          </h2>
          <p className="text-neutral-300">#YoProgramo</p>
          <p className="text-neutral-500">2021</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
