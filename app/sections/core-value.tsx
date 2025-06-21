import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CoreValueSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold mb-6"
              >
                Our Core Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-primary mb-4"
              >
                &quot;Progressive Innovation with Purpose&quot;
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                The Nuvance team embodies the spirit of “Progressive Innovation
                with Purpose” by relentlessly advancing the frontier of ideas
                while staying grounded in meaningful impact. We believe that
                true innovation isn’t just about what’s new — it’s about what
                matters. With every step forward, we seek to challenge
                conventions, design with intention, and build solutions that are
                not only forward-thinking but also deeply relevant and
                human-centered. Our purpose-driven approach ensures that
                progress is never just for the sake of novelty, but always in
                service of clarity, value, and transformation
              </motion.p>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lorem, ipsum.</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    sed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lorem, ipsum.</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    sed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lorem, ipsum.</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    sed.
                  </p>
                </div>
              </div>
            </motion.div> */}
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/cm-logo.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className="w-full h-full text-primary-foreground"
                  />
                </div>
                <h3 className="text-xl font-semibold">Our Meaning</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Nuvance is an inspired blend of{" "}
                <span className="font-bold">"New"</span> and
                <span className="font-bold">"Advance"</span> symbolizing an
                intentional move toward innovation and progress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-2xl p-6 border border-primary/20"
            >
              <h4 className="font-semibold text-primary mb-3">Our Mission</h4>
              <p className="text-sm text-muted-foreground">
                Our mission at Nuvance is to drive meaningful progress through
                purposeful, forward-thinking innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
