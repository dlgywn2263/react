import { motion, stagger } from "motion/react";
import { Container } from "postcss";

function App() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.4, { start: 0 }),
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: "0.4" },
    },
  };
  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="h-screen bg-pink-100 flex flex-col justify-center items-center text-center"
      >
        <motion.h1 variants={item} className="text-5xl">
          안녕하세요
        </motion.h1>
        <motion.h1 variants={item} className="text-5xl">
          hello
        </motion.h1>
        <motion.h1 variants={item} className="text-5xl">
          잘가세요
        </motion.h1>
        <motion.h1 variants={item} className="text-5xl">
          Bye
        </motion.h1>
      </motion.section>
    </>
  );
}

export default App;
