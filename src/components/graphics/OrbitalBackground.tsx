
"use client";

import { useEffect, useRef } from "react";

export default function OrbitalBackground() {
 

    return (
    <div
      aria-hidden="true"
      className="space-background pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="space-nebula" />
      <div className="space-stars space-stars-far" />
      <div className="space-stars space-stars-near" />
    </div>
  );
}
