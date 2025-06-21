import React from "react";
import Image from "next/image";
import { Users, Target } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 lg:h-screen lg:flex lg:justify-center lg:items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="w-16 h-16 -ml-1 bg-primary rounded-xl flex items-center justify-center">
                    <Image
                      src="/cm-logo.svg"
                      alt="logo"
                      className="w-full h-full text-primary-foreground"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    <span className="text-primary">Nuvance</span>
                  </h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                  }}
                  className="text-xl text-muted-foreground mt-2"
                >
                  Innovative progress through teamwork and ideas
                </motion.p>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
              }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We chose the name Nuvance because it reflects what our team stands
              for: embracing new ideas and always striving to advance beyond the
              limits. It’s not just a name — it’s a mindset. We believe in
              continuous improvement, fresh thinking, and moving forward as one
              team. Just like the word itself, our work is a blend of innovation
              and advancement — creating something bold, meaningful, and
              future-ready
            </motion.p>
            <div className="flex gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
              >
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  11 Team Members
                </Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                }}
              >
                <Badge variant="secondary" className="px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  Innovation Focus
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <Image
              src="/members/nuvances.jpg"
              alt="Team Innovation Project"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
