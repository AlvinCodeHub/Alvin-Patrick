"use client"

import React, { useState, useEffect } from "react"
import { TextReveal } from "./text-reveal"

interface TaglineIntroProps {
  onComplete: () => void
}

const TOTAL_DURATION = 5000 // 5 seconds total
const SWITCH_AT = TOTAL_DURATION / 2 // second phrase appears at 2.5s

const SCRIPT_FONT = '"Great Vibes", "Snell Roundhand", "Brush Script MT", cursive'

/**
 * Synthesised intro sound (Web Audio API, no audio file needed):
 * a deep warm drone, a soft bell at the start and a rising chord when the
 * second phrase appears. Browsers block audio until the visitor interacts with
 * the page, so if autoplay is blocked it starts on the first click/tap/key.
 */
function playIntroSound(): (() => void) | undefined {
  const AC = window.AudioContext || (window as any).webkitAudioContext
  if (!AC) return
  const ctx: AudioContext = new AC()
  const master = ctx.createGain()
  master.connect(ctx.destination)
  let started = false
  const events = ["pointerdown", "keydown", "touchstart"]

  const tone = (freq: number, type: OscillatorType, t0: number, dur: number, peak: number) => {
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = type
    osc.frequency.value = freq
    g.gain.setValueAtTime(0.0001, t0)
    g.gain.exponentialRampToValueAtTime(peak, t0 + 0.03)
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
    osc.connect(g)
    g.connect(master)
    osc.start(t0)
    osc.stop(t0 + dur + 0.05)
  }

  const go = () => {
    if (started || ctx.state !== "running") return
    started = true
    events.forEach((ev) => window.removeEventListener(ev, tryResume))
    const t = ctx.currentTime + 0.05
    master.gain.setValueAtTime(0.9, t)
    master.gain.setValueAtTime(0.9, t + 4.1)
    master.gain.linearRampToValueAtTime(0, t + 4.9)

    // Phase 1: drone + bell
    tone(110, "sine", t, 5, 0.22)
    tone(220, "sine", t + 0.1, 2.6, 0.1)
    tone(659.25, "triangle", t + 0.25, 2.2, 0.12)
    tone(987.77, "sine", t + 0.3, 1.8, 0.05)

    // Phase 2: rising chord + shimmer
    tone(55, "sine", t + 2.4, 2.5, 0.2)
    ;[440, 554.37, 659.25, 880].forEach((f, k) => tone(f, "triangle", t + 2.5 + k * 0.06, 2.4, 0.1))
    tone(1318.5, "sine", t + 2.6, 2.2, 0.05)
  }

  const tryResume = () => {
    ctx.resume().then(go).catch(() => {})
  }

  tryResume()
  events.forEach((ev) => window.addEventListener(ev, tryResume))

  return () => {
    events.forEach((ev) => window.removeEventListener(ev, tryResume))
    setTimeout(() => ctx.close().catch(() => {}), 5500)
  }
}

export const TaglineIntro: React.FC<TaglineIntroProps> = ({ onComplete }) => {
  const [elapsed, setElapsed] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFinishing, setIsFinishing] = useState(false)

  // Phase 1: 0 - 2.5s ("Life is Hard"), Phase 2: 2.5 - 5s ("But Not Impossible")
  const phase = elapsed < SWITCH_AT ? 1 : 2

  useEffect(() => {
    const startTime = performance.now()

    const interval = setInterval(() => {
      const current = Math.min(TOTAL_DURATION, performance.now() - startTime)
      setElapsed(current)
      setIsTransitioning(current >= SWITCH_AT - 350 && current <= SWITCH_AT + 150)
      if (current >= TOTAL_DURATION - 600) setIsFinishing(true)
      if (current >= TOTAL_DURATION) {
        clearInterval(interval)
        onComplete()
      }
    }, 25)

    return () => clearInterval(interval)
  }, [onComplete])

  // Intro sound (separate effect with no deps so it never restarts)
  useEffect(() => playIntroSound(), [])

  const headingSize = "clamp(3.5rem, 11vw, 8rem)"

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 select-none ${
        isFinishing ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundColor: "var(--bg-deep, #f8fafc)",
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(37, 99, 235, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 20% 20%, rgba(15, 23, 42, 0.03) 0%, transparent 40%)
        `,
      }}
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-1000"
        style={{
          background:
            phase === 1
              ? "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(79, 70, 229, 0.04) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(79, 70, 229, 0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
          transform: isTransitioning ? "scale(1.35)" : "scale(1)",
        }}
      />

      <main className="relative flex items-center justify-center w-full px-6 z-10 text-center" style={{ maxWidth: "64rem" }}>
        <div className="flex items-center justify-center" style={{ minHeight: "11rem" }}>
          {phase === 1 && (
            <div
              key="word-reveal-1"
              className={`transition-all duration-300 ${
                isTransitioning ? "scale-95 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
              }`}
            >
              <TextReveal
                as="h1"
                className="tracking-wide"
                style={{
                  fontSize: headingSize,
                  lineHeight: 1.1,
                  fontFamily: SCRIPT_FONT,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--text-primary, #0f172a)",
                }}
                per="word"
                preset="fade-in-blur"
                speedReveal={1.6}
              >
                Life is Hard
              </TextReveal>
            </div>
          )}

          {phase === 2 && (
            <div
              key="word-reveal-2"
              className={`transition-all duration-300 animate-in fade-in zoom-in-95 ${
                isFinishing ? "scale-105 opacity-90" : "scale-100 opacity-100"
              }`}
            >
              <TextReveal
                as="h1"
                className="tracking-wide"
                style={{
                  fontSize: headingSize,
                  lineHeight: 1.1,
                  fontFamily: SCRIPT_FONT,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--primary, #2563eb)",
                  textShadow: "0 4px 30px rgba(37, 99, 235, 0.25)",
                }}
                per="word"
                preset="fade-in-blur"
                speedReveal={1.6}
              >
                But Not Impossible
              </TextReveal>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default TaglineIntro
