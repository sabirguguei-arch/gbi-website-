import Image from "next/image";
import gbiLogo from "../../.codex-remote-attachments/01a0d3aa-110d-75e0-98af-81fe6d7a5570/a4a3215f-f152-490d-927e-bf265ccd45fd/1-Screenshot_20260924-214852_Lite.jpg";

export function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  const dimensions = size === "sm" ? "h-10 w-10" : "h-11 w-11";
  const pixelSize = size === "sm" ? 40 : 44;
  return <span className={`relative block shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-white/35 ${dimensions}`}><Image alt="Green Belt Initiative logo" className="h-full w-full scale-[1.08] object-cover" height={pixelSize} placeholder="empty" sizes={`${pixelSize}px`} src={gbiLogo} width={pixelSize}/></span>;
}
