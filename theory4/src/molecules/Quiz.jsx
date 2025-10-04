import { motion } from "motion/react";

const Quiz = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <>
      <section className="h-screen bg-pink-100 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={hidden}
          animate={show}
          transition={{ duration: 1 }}
          className="text-white text-6xl font-bold  "
        >
          Lifetime Mobility
        </motion.h1>
        <motion.h2
          initial={hidden}
          animate={show}
          transition={{ duration: 1, delay: 1 }}
          className="text-white text-4xl font-bold  "
        >
          라이프타임 모빌리티 플랫폼, 쏘카
        </motion.h2>
      </section>

      <section className="h-screen bg-blue-100 ">
        <div className="container mx-auto">
          <motion.h2
            initial={hidden}
            whileInView={show}
            transition={{ duration: 1 }}
            className="text-white text-4xl font-bold  "
          >
            차가 필요한 모든 순간
            <br /> 쏘카 카셰어링
          </motion.h2>
        </div>
      </section>
    </>
  );
};

export default Quiz;
