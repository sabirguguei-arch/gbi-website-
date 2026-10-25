import Link from "next/link";
import { Arrow } from "@/components/ui/Icon";

export function NewsEmptyState() { return <div className="gbi-surface relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#e1eff0]"/><p className="gbi-eyebrow">Stories & news</p><h3 className="font-display mt-5 max-w-md text-3xl leading-tight text-[#17342a]">Updates from GBI will be shared here.</h3><p className="mt-4 max-w-lg leading-7 text-[#536b61]">This space is ready for verified field stories, news and programme learning as they are published.</p><Link href="/stories" className="gbi-link mt-7 text-[#17342a]">Visit stories <Arrow /></Link></div>; }
