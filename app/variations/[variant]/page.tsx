import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AuthorSite from '../../../components/author-site';
import { variations } from '../../../lib/variations';
export const dynamicParams = false;
export function generateStaticParams() { return [{ variant: 'warm' }, { variant: 'blue' }]; }
export async function generateMetadata({ params }: { params: Promise<{ variant: string }> }): Promise<Metadata> {
  const { variant } = await params;
  if (variant !== 'warm' && variant !== 'blue') return {};
  return { title: `אילה דקל — ${variations[variant].name}`, robots: { index: false, follow: false }, alternates: { canonical: '/' } };
}
export default async function Page({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  if (variant !== 'warm' && variant !== 'blue') notFound();
  return <AuthorSite variant={variant} />;
}
