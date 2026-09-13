export function IconArrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9.5 4.5L13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 16.5L20 20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconAccount() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 19.2c.8-3.1 3.4-5 6.5-5s5.7 1.9 6.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconHeart({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 19s-6.5-4.2-8.2-7.3C2.3 9.4 3.2 6.5 6 5.7c1.7-.5 3.3.1 4 1.4.7-1.3 2.3-1.9 4-1.4 2.8.8 3.7 3.7 2.2 6C18.5 14.8 12 19 12 19z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill={filled ? "currentColor" : "none"}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBag() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6.5 8h11l-.7 11.2a1.5 1.5 0 0 1-1.5 1.4H8.7a1.5 1.5 0 0 1-1.5-1.4L6.5 8z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 8V6.8A3 3 0 0 1 12 3.8 3 3 0 0 1 15 6.8V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMinus() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7h9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.5v9M2.5 7h9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M6 1.2l1.24 2.52 2.78.4-2.01 1.96.47 2.76L6 7.54 3.52 8.84l.47-2.76-2.01-1.96 2.78-.4L6 1.2z" fill="currentColor" stroke="currentColor" strokeWidth="0.7" />
        </svg>
      ))}
    </span>
  );
}

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden className="logo-mark">
      <path d="M24 8c-1.8 6.4-6.8 11.2-13.6 13.4 4.2 1.2 8 4.4 10.2 8.8C21.4 24.4 22.8 16.8 24 8z" fill="#A8B2A0" />
      <path d="M24 6c.4 8.6 2.2 16.4 6.4 22.6 2-4.8 6.2-8.4 11.2-9.8C34.4 16.4 28.6 11.4 24 6z" fill="#2C5348" />
      <path d="M24 5c-2.2 9.6-2.2 18.4 0 28 2.2-9.6 2.2-18.4 0-28z" fill="#173A32" />
      <circle cx="24" cy="35.5" r="1.4" fill="#C8AD79" />
    </svg>
  );
}
