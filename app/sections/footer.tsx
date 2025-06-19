import { Lightbulb, Mail, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-background border-t py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-between">
                <Image
                  src={"/cm-logo.svg"}
                  alt="logo"
                  width={24}
                  height={24}
                  className="w-8 h-8 text-primary-foreground"
                />
              </div>
              <span className="text-xl font-bold">Nuvance</span>
            </div>
            <p className="text-muted-foreground">
              Student Innovation Project focused on creating meaningful
              technological solutions.
            </p>
          </div>

          {/* <div className="space-y-4">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>team.innovate@university.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>github.com/team-innovate</span>
              </div>
            </div>
          </div> */}

          <div className="space-y-4">
            <h4 className="font-semibold">Project Details</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Academic Year: 2024-2025</p>
              <p>Department: Computer Science</p>
              <p>Project Duration: 8 months</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 Nuvance. All rights reserved. Built with passion by
            students, for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
