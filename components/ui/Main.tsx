import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
export default function Main() {
  return (
    <div className="container mx-auto max-w-10xl pt-20">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <h2 className="text-center text-5xl">Collection</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full  mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <img
                className="w-full object-cover object-center mb-6"
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
