"use client";

import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface NavbarProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
}

const Navbar = ({ brideName, groomName, weddingDate }: NavbarProps) => {
  const showNav = useScrollThreshold(500);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50
            bg-background/80 backdrop-blur-md
            border-b border-primary/10"
        >
          <div className="content-container h-14 flex items-center justify-between">
            {/* Left: Names */}
            <div className="font-heading text-primary text-lg tracking-wide">
              {brideName} <span className="mx-1 text-primary/60">&</span>{" "}
              {groomName}
            </div>

            {/* Right: Date */}
            <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {weddingDate}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export { Navbar };
