import Image from "next/image";
import { motion } from "framer-motion";

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
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
              <Image
                src="https://jacklatimer.design/images/placeholder.png"
                alt="Design"
                height={1100}
                width={1100}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
