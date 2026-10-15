/**
 * Outlines for the hero wireframe (Three.js) and its static SVG fallback:
 * a map pin ("found") morphing into a phone ("online").
 */
export type Pt = [number, number]

/** Map-pin outline centred on origin, height ≈ 2.4 units, clockwise from the tip. */
export function pinShape(): Pt[] {
  const R = 0.82 // head radius
  const cy = 0.38 // head centre y
  const tipY = -1.2
  const pts: Pt[] = []
  // tangent points from the tip to the head circle
  const half = Math.acos(R / (cy - tipY))
  const L = -Math.PI / 2 - half + Math.PI * 2 // left tangent angle
  const Rr = -Math.PI / 2 + half // right tangent angle
  const steps = 64
  pts.push([0, tipY])
  // clockwise over the top of the head
  for (let i = 0; i <= steps; i++) {
    const ang = L - (i / steps) * (L - Rr)
    pts.push([Math.cos(ang) * R, cy + Math.sin(ang) * R])
  }
  return pts
}

/** Portrait rounded-rect "phone" outline, clockwise from bottom centre. */
export function phoneShape(w = 1.3, h = 2.4, r = 0.22): Pt[] {
  const pts: Pt[] = []
  const hw = w / 2
  const hh = h / 2
  const arc = (cx: number, cy: number, a0: number) => {
    for (let i = 0; i <= 8; i++) {
      const a = a0 - (i / 8) * (Math.PI / 2)
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
    }
  }
  pts.push([0, -hh])
  arc(-hw + r, -hh + r, -Math.PI / 2)
  arc(-hw + r, hh - r, Math.PI)
  arc(hw - r, hh - r, Math.PI / 2)
  arc(hw - r, -hh + r, 0)
  return pts
}

/** Resample a closed polyline to n points evenly spaced by arc length. */
export function resample(poly: Pt[], n: number): Pt[] {
  const seg: number[] = []
  let total = 0
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i]
    const b = poly[(i + 1) % poly.length]
    const d = Math.hypot(b[0] - a[0], b[1] - a[1])
    seg.push(d)
    total += d
  }
  const out: Pt[] = []
  let idx = 0
  let acc = 0
  for (let k = 0; k < n; k++) {
    const target = (k / n) * total
    while (acc + seg[idx] < target) {
      acc += seg[idx]
      idx = (idx + 1) % poly.length
    }
    const t = seg[idx] ? (target - acc) / seg[idx] : 0
    const a = poly[idx]
    const b = poly[(idx + 1) % poly.length]
    out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t])
  }
  return out
}

/** SVG path for the pin in a viewBox of `size` (y flipped). */
export function pinPath(size = 100, pad = 8): string {
  const pts = pinShape()
  const scale = (size - pad * 2) / 2.4
  return (
    pts
      .map(([x, y], i) => `${i ? 'L' : 'M'}${(size / 2 + x * scale).toFixed(2)} ${(size / 2 - y * scale).toFixed(2)}`)
      .join(' ') + 'Z'
  )
}
