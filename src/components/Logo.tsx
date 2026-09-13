import Link from "next/link";
import { LogoMark } from "./Icons";

export function Logo({ size = "md", inverted = false, tagline = false }: { size?: "md" | "lg"; inverted?: boolean; tagline?: boolean }) {
  return (
    <Link href="/" className="logo-link" aria-label="NeyVora home">
      <span className={`logo logo-${size}${inverted ? " logo-inv" : ""}`}>
        <LogoMark size={size === "lg" ? 42 : 28} />
        <span className="logo-text">
          <span className="logo-word">NeyVora</span>
          {tagline ? <span className="logo-tag">Natural Personal Care · Wellness</span> : null}
        </span>
      </span>
    </Link>
  );
}
