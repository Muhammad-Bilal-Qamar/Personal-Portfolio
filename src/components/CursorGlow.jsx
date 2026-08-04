import { useEffect, useRef } from "react";

/**
 * A soft glow that follows the cursor. When the cursor hovers an element
 * marked with `data-glow`, the glow smoothly "docks" onto that element
 * (centers on it and grows to roughly its size) instead of following the
 * pointer. When the hover ends, the glow returns to trailing the cursor.
 *
 * Color adapts to theme via the --glow-color CSS variable (white in dark
 * mode, greyish in light mode) — see index.css.
 */
export function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const docked = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Skip on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    const show = () => el.classList.add("is-visible");
    const hide = () => el.classList.remove("is-visible");

    const onMove = (e) => {
      show();
      target.current = { x: e.clientX, y: e.clientY };
      if (!docked.current) {
        pos.current = target.current;
      }
    };

    const onEnter = (e) => {
      const host = e.target.closest("[data-glow]");
      if (!host) return;
      const rect = host.getBoundingClientRect();
      docked.current = host;
      target.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      const size = Math.max(rect.width, rect.height) * 1.6;
      el.style.setProperty("--dock-w", `${size}px`);
      el.style.setProperty("--dock-h", `${size}px`);
      el.classList.add("is-docked");
    };

    const onLeave = (e) => {
      const host = e.target.closest("[data-glow]");
      if (!host || host !== docked.current) return;
      docked.current = null;
      el.classList.remove("is-docked");
    };

    const loop = () => {
      // Smoothly ease toward the target position
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      el.style.left = `${pos.current.x}px`;
      el.style.top = `${pos.current.y}px`;
      raf.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mouseleave", hide);
    raf.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mouseleave", hide);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div id="cursor-glow" ref={glowRef} aria-hidden="true" />;
}
