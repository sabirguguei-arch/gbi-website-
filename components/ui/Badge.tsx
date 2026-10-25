export function Badge({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "gold" | "blue" }) {
  const styles = { green: "bg-[#e2ecd2] text-[#245d42]", gold: "bg-[#f5e6bd] text-[#765311]", blue: "bg-[#dceef1] text-[#1c5d79]" };
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-[.66rem] font-extrabold uppercase tracking-[.13em] ${styles[tone]}`}>{children}</span>;
}
