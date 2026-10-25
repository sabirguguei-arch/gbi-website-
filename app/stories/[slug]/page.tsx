import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stories } from "@/content/stories";
import { PageHero } from "@/components/hero/PageHero";
export function generateStaticParams() { return stories.map(story => ({ slug: story.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const story = stories.find(item => item.slug === params.slug);
  return story ? { title: `${story.title} | GBI`, description: story.excerpt, openGraph: { title: `${story.title} | GBI`, description: story.excerpt, type: "article" } } : { title: "Story not found | GBI" };
}
export default function StoryPage({ params }: { params: { slug: string } }) { const story = stories.find(item => item.slug === params.slug); if (!story) notFound(); return <main><PageHero eyebrow={`${story.category.toUpperCase()} · ${story.date.toUpperCase()}`} title={story.title} intro={story.excerpt}/><article className="mx-auto max-w-3xl px-5 py-20 leading-8 text-[#466256] sm:px-10"><p>Field stories share experiences and insight from the people at the heart of GBI’s work. This page is ready for the complete, verified article and accompanying photography.</p><Link className="mt-10 inline-block border-b border-[#153c2e] pb-2 font-bold text-[#153c2e]" href="/stories">Back to stories</Link></article></main>; }
