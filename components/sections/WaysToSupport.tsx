import { Arrow, Handshake, Heart, MessageCircle } from "@/components/ui/Icon";
import Link from "next/link";

const supportOptions = [
  {
    eyebrow: "GIVE",
    title: "Support local solutions",
    text: "Make a contribution toward GBI’s environmental, agricultural and community-resilience focus areas.",
    href: "/#donation",
    icon: Heart,
  },
  {
    eyebrow: "PARTNER",
    title: "Build with GBI",
    text: "Start a conversation about locally rooted collaboration in South Sudan.",
    href: "/partners",
    icon: Handshake,
  },
  {
    eyebrow: "CONNECT",
    title: "Talk with our team",
    text: "Contact GBI for information, collaboration enquiries or questions about our work.",
    href: "/contact",
    icon: MessageCircle,
  },
];

export function WaysToSupport() {
  return <section className="bg-[#f1efe7] px-5 py-20 sm:px-10 lg:py-24"><div className="mx-auto max-w-[1240px]"><div className="max-w-2xl"><p className="gbi-eyebrow">TAKE PART</p><h2 className="font-display mt-5 text-4xl leading-[1.06] tracking-[-.035em] text-[#17342a] sm:text-5xl">Choose a practical way to stand with GBI.</h2><p className="mt-5 text-lg leading-8 text-[#536b61]">Whether you give, partner or get in touch, your interest helps connect GBI with people and organisations who care about sustainable local solutions.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{supportOptions.map(({ eyebrow, title, text, href, icon: Icon }) => <Link key={href} href={href} className="gbi-card-lift group flex min-h-[360px] flex-col border-t-4 border-[#1d6a4b] border-x border-b border-[#d1d5c7] bg-[#f7f5ee] p-6 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#d5a53e] sm:p-7"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#e1eff0] text-[#1d6a4b] transition-colors duration-200 group-hover:bg-[#dce5b5]"><Icon /></span><p className="mt-8 text-[.68rem] font-extrabold tracking-[.15em] text-[#1d6a4b]">{eyebrow}</p><h3 className="font-display mt-3 text-2xl leading-tight text-[#17342a]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#536b61]">{text}</p><span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#17342a] transition-colors group-hover:text-[#1d6a4b]">Explore <Arrow /></span></Link>)}</div></div></section>;
}
