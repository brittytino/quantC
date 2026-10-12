"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectionStatus } from "@/types/presentation";
import { checkPythonEngineHealth } from "@/lib/api-client";

import { MinimalHeader } from "./MinimalHeader";
import { MinimalControls } from "./MinimalControls";
import { SpeakerNotesDrawer } from "./SpeakerNotesDrawer";
import { KeyboardHelpModal } from "./KeyboardHelpModal";

import { Slide01Intro } from "../slides/Slide01Intro";
import { Slide02Classical } from "../slides/Slide02Classical";
import { Slide03Quantum } from "../slides/Slide03Quantum";
import { Slide04Pipeline } from "../slides/Slide04Pipeline";
import { Slide05Algorithms } from "../slides/Slide05Algorithms";
import { Slide06Python } from "../slides/Slide06Python";
import { Slide07Outlook } from "../slides/Slide07Outlook";
import { Slide08Demo } from "../slides/Slide08Demo";


const TOTAL_SLIDES = 8;

export function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("checking");
  const [replayCount, setReplayCount] = useState<number>(0);

  // Check connection to Python engine
  const checkEngine = useCallback(async () => {
    setConnectionStatus("checking");
    const isOnline = await checkPythonEngineHealth();
    setConnectionStatus(isOnline ? "connected" : "fallback");
  }, []);

  useEffect(() => {
    checkEngine();
  }, [checkEngine]);

  // Fullscreen listeners
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(TOTAL_SLIDES, prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(1, prev - 1));
  }, []);

  const jumpToSlide = useCallback((slideNum: number) => {
    if (slideNum >= 1 && slideNum <= TOTAL_SLIDES) {
      setCurrentSlide(slideNum);
    }
  }, []);

  // Global Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input field (unless Esc)
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") {
        if (e.key === "Escape") {
          (document.activeElement as HTMLElement)?.blur();
        }
        return;
      }

      // In Slide 8 (Demo), ArrowUp and ArrowDown are reserved for adjusting experiment parameters
      if (currentSlide === 8 && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        return;
      }

      // Special key handlers
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          nextSlide();
          break;

        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prevSlide();
          break;

        case "Home":
          e.preventDefault();
          jumpToSlide(1);
          break;

        case "End":
          e.preventDefault();
          jumpToSlide(TOTAL_SLIDES);
          break;

        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;

        case "r":
        case "R":
          e.preventDefault();
          setReplayCount((c) => c + 1);
          break;

        case "d":
        case "D":
          e.preventDefault();
          jumpToSlide(8);
          break;

        case "n":
        case "N":
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;


        case "?":
          e.preventDefault();
          setIsHelpOpen((prev) => !prev);
          break;

        case "Escape":
          if (isHelpOpen) {
            setIsHelpOpen(false);
          } else if (isNotesOpen) {
            setIsNotesOpen(false);
          }
          break;

        default:
          if (e.key >= "1" && e.key <= "8") {
            jumpToSlide(parseInt(e.key, 10));
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, nextSlide, prevSlide, jumpToSlide, toggleFullscreen, isHelpOpen, isNotesOpen]);

  return (
    <div className="relative w-screen h-screen bg-[#050505] text-slate-100 flex flex-col justify-between overflow-hidden select-none font-sans">
      {/* Discreet Minimalist Header with Subtle Corner Slide Counter */}
      <MinimalHeader
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        connectionStatus={connectionStatus}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Main Ultra-Widescreen Presentation Viewport - strictly zero vertical scrolling */}
      <main className="relative flex-1 w-full h-full flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden z-10">
        <div className="relative w-full h-full max-w-[1880px] mx-auto flex flex-col justify-center overflow-hidden border border-slate-800/80 rounded-3xl bg-black/60 shadow-2xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full flex flex-col justify-between overflow-hidden"
            >
              {currentSlide === 1 && <Slide01Intro replayTrigger={replayCount} />}
              {currentSlide === 2 && <Slide02Classical />}
              {currentSlide === 3 && <Slide03Quantum />}
              {currentSlide === 4 && <Slide04Pipeline />}
              {currentSlide === 5 && <Slide05Algorithms />}
              {currentSlide === 6 && <Slide06Python />}
              {currentSlide === 7 && <Slide07Outlook />}
              {currentSlide === 8 && <Slide08Demo replayTrigger={replayCount} />}
            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      {/* Minimal Navigation Controls (Auto-hiding on mouse idle, zero permanent labels) */}
      <MinimalControls
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrev={prevSlide}
        onNext={nextSlide}
        onJump={jumpToSlide}
      />

      {/* Speaker Notes Drawer (Toggled by N or Esc) */}
      <SpeakerNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
      />

      {/* Keyboard Shortcuts Cheatsheet (Toggled by ? or Esc) */}
      <KeyboardHelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}
