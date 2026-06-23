export function Logo({ className = "h-10 w-auto", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/logo.png"
      alt="Haven M Construction"
      className={`${className} ${invert ? "brightness-0 invert" : ""}`}
      width={320}
      height={96}
    />
  );
}
