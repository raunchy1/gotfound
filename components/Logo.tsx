/** GotFound wordmark: pin glyph + tracked caps, accent slash (same system as the Arxe-style nav). */
export function PinMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d="M12 22.5s-7.5-7.4-7.5-13a7.5 7.5 0 0 1 15 0c0 5.6-7.5 13-7.5 13z" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="12" cy="9.5" r="2.6" fill="var(--accent)" />
    </svg>
  )
}

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <PinMark />
      <span>
        GOT<span style={{ color: 'var(--accent)' }}>/</span>FOUND
      </span>
    </span>
  )
}
