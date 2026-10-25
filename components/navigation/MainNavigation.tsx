"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function MainNavigation({ mobile = false, onNavigate, items = site.navigation }: { mobile?: boolean; onNavigate?: () => void; items?: ReadonlyArray<{ label: string; href: string }> }) {
  const pathname = usePathname();
  return <>{items.map(item => {
    const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
    return <Link onClick={onNavigate} key={item.href} aria-current={active ? "page" : undefined} className={mobile ? `block rounded border-l-2 py-3 pl-3 text-sm transition-colors hover:text-[#f5e6bd] ${active ? "border-[#d5a53e] text-[#f5e6bd]" : "border-transparent"}` : `rounded border-b-2 px-1 py-2 transition-colors hover:text-[#f5e6bd] ${active ? "border-[#d5a53e] text-[#f5e6bd]" : "border-transparent"}`} href={item.href}>{item.label}</Link>;
  })}</>;
}
