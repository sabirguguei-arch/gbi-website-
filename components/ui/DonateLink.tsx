import Link from "next/link";

type DonateLinkProps = {
  className?: string;
  onClick?: () => void;
};

export function DonateLink({ className = "", onClick }: DonateLinkProps) {
  return <Link href="/#donation" onClick={onClick} className={`inline-flex min-h-14 min-w-[168px] items-center justify-center gap-2 rounded-full bg-[#d5a53e] px-8 py-4 text-base font-semibold text-[#17342a] shadow-[0_8px_20px_rgba(213,165,62,.2)] transition-colors duration-200 hover:bg-[#e4b952] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5e6bd] ${className}`}><span>Donate</span><span aria-hidden="true">❤️</span></Link>;
}
