import Link from 'next/link';
import { variations, type Variation } from '../lib/variations';
export default function VariationSwitcher({ current }: { current: Variation }) {
  return <nav className="variation-switcher" aria-label="בחירת גרסה להצגה"><Link href="/variations" className="variation-overview">שלוש הצעות לאילה</Link><div>{Object.entries(variations).map(([key, item], i) => <Link key={key} href={item.path} aria-current={current === key ? 'page' : undefined}><span>0{i + 1}</span> {item.label}</Link>)}</div></nav>;
}
