import { motion } from "motion/react";
import { ArrowDownToLine } from "lucide-react";
function App() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.9 },
    },
  };
  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="h-screen bg-indigo-300 flex flex-col justify-center text-center relative"
      >
        <motion.h1
          variants={item}
          className="text-4xl text-white font-bold md:text-7xl "
        >
          Lifetime Mobility
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-l text-white font-semibold mt-7 md:text-3xl  "
        >
          라이프타임 모빌리티 플랫폼, 쏘카
        </motion.h2>
        <motion.button
          variants={item}
          className="absolute bg-blue-500 text-white flex justify-center items-center gap-2 bottom-0 left-0 w-full py-3 text-sm md:bottom-14 md:right-14 md:left-auto md:w-auto md:px-5 md:py-5 md:rounded-lg  md:text-sm"
        >
          <ArrowDownToLine size={18} color="white" />
          쏘카 앱 다운로드
        </motion.button>
      </motion.section>

      <section className="h-screen bg-indigo-950 ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white  p-7"
          >
            <h1 className="text-xl">차가 필요한 모든 순간</h1>
            <h1 className=" text-l font-semibold">쏘카 카셰어링</h1>
            <div className="mt-10  overflow-hidden rounded-xl">
              <motion.img
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=" w-full object-cover "
                src="https://images.unsplash.com/photo-1475782944331-0ea8c9089a6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default App;
