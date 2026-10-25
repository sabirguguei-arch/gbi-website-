
import Image from "next/image";

export function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  const dimensions = size === "sm" ? "h-10 w-10" : "h-11 w-11";
  const pixelSize = size === "sm" ? 40 : 44;

  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-white/35 ${dimensions}`}
    >
      <Image
        alt="Green Belt Initiative logo"
        className="h-full w-full scale-[1.08] object-cover"
        height={pixelSize}
        width={pixelSize}
        sizes={`${pixelSize}px`}
        src="/logo/gbi-logo.jpg"
      />
    </span>
  );
}
