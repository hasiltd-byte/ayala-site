import Link from 'next/link';
import type { Metadata } from 'next';
import { variations } from '../../lib/variations';
export const metadata: Metadata = { title: 'אילה דקל — שלוש הצעות לאתר', robots: { index: false, follow: false } };
const descriptions = ['העיצוב המקורי בגווני שמנת ובורדו, עם אודות קצר ותמציתי. סגנון ספרותי נקי שמעניק מקום לספרים.', 'מילים שמזמינות להתקרב, צבעים עמוקים ורכים ותמונה במסגרת רחבה. תחושה של שיחה אישית ושל בית.', 'בהשראת הרפרנס: תכלת בהיר, שם גדול, תמונת סופרת ומדף ספרים שנכנס לתוך אזור הפתיחה. מראה של מגזין ספרותי.'];
export default function Page() {
  return <main className="proposal-page"><div className="wrap"><span className="eyebrow">אילה דקל · הצעות לאתר</span><h1>שלוש דרכים.<br />אותו עולם של סיפורים.</h1><p className="proposal-intro">שלושה כיוונים לעיצוב ולקול של האתר. אפשר לפתוח כל גרסה, להתרשם גם בנייד ולבחור את התחושה שהכי מתאימה.</p><div className="proposal-grid">{Object.entries(variations).map(([key, item], i) => <article className={`proposal-card proposal-${key}`} key={key}><Link href={item.path} className="proposal-preview" aria-label={`פתיחת ${item.name}`}><div><small>אילה דקל</small><strong>{item.title.join(' ')}</strong></div><img src="/assets/ayala.webp" alt="אילה דקל" width="570" height="580" /></Link><div className="proposal-content"><span className="eyebrow">0{i + 1} · {item.label}</span><h2>{item.name}</h2><p>{descriptions[i]}</p><Link className="button" href={item.path}>לצפייה בגרסה {i + 1}</Link></div></article>)}</div></div></main>;
}
