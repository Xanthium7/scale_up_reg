"use client";

import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight, Rocket, Target, Goal } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.5}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[10%] h-[100%] skew-y-12 absolute"
        )}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20 text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary-blue/5 via-primary-purple/5 to-transparent animate-pulse" />

        {/* Auth Buttons with improved animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="fixed top-6 right-6 z-50 flex gap-4"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button
              onClick={() => router.push("/Login")}
              className="bg-black/30 border border-primary-blue/20 hover:bg-gradient-to-r hover:from-primary-blue/60 hover:to-primary-purple hover:text-white text-white px-6"
            >
              Login
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Button
              onClick={() => router.push("/Signup")}
              className="bg-gradient-to-r from-primary-blue/60 to-primary-purple hover:opacity-90"
            >
              Sign Up
            </Button>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl  font-extrabold my-8 text-transparent bg-clip-text bg-gradient-to-r from-[#639BF2] via-[#982dca] to-[#639BF2] animate-gradient-x leading-tight"
        >
          Innovate ◦ Create ◦ Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400/50 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join us on this exciting journey of innovation and entrepreneurship.
          Shape the future with your groundbreaking ideas.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: <Rocket className="w-8 h-8" />, text: "Launch Your Ideas" },
            { icon: <Target className="w-8 h-8" />, text: "Connect" },
            { icon: <Goal className="w-8 h-8" />, text: "Get Noticed" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-xl border border-primary-blue/20 p-6 rounded-xl shadow-lg shadow-primary-purple/10 hover:border-primary-purple/40 transition-all"
            >
              <div className="text-primary-purple mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold">{feature.text}</h3>
            </div>
          ))}
        </motion.div>

        {/* Register Button Section with improved animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative group flex flex-col items-center gap-4"
        >
          <Button
            onClick={() => router.push("/Login")}
            className="relative flex items-center justify-center px-8 py-6 text-lg rounded-full bg-black hover:bg-black/80 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/60 to-primary-purple/80 opacity-100 group-hover:opacity-80 transition-all duration-300" />
            <motion.span
              className="relative z-10 flex items-center font-bold text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Register Now
              <motion.span
                className="ml-2 inline-block"
                initial={false}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.span>
          </Button>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="text-gray-400/70 text-sm"
          >
            Authentication required to register for LaunchPad
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Timeline Section with enhanced styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto pb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#639BF2] via-[#982dca] to-[#639BF2]">
          Event Timeline
        </h2>
        <Timeline />
      </motion.div>
    </div>
  );
}
