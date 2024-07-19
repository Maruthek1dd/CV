import { motion } from "framer-motion";

const containerVariants = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const About = () => {
  return (
    <motion.div
      variants={containerVariants(0)}
      initial="hidden"
      animate="visible"
      className="pb-20 pt-8 flex flex-col justify-center text-center border-b border-neutral-800"
    >
      <h2 className="mt-8 text-3xl">Acerca de mí</h2>
      <p className="text-sm leading-tight mt-6">
        Soy Leo, un programador Full Stack apasionado por la creación de
        soluciones innovadoras y eficientes. Con más de 2 años de experiencia en
        desarrollo tanto front-end como back-end, así como en análisis de datos,
        me dedico a convertir ideas complejas en realidades funcionales y
        estéticamente atractivas. Busco constantemente perfeccionar mis
        habilidades y contribuir con proyectos significativos. Soy conocido por
        mi creatividad y mi capacidad para resolver problemas de manera
        innovadora. Estoy comprometido con el aprendizaje continuo y ansío
        formar parte de equipos dinámicos donde pueda aportar y aprender
        constantemente.
      </p>
    </motion.div>
  );
};
