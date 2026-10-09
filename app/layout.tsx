import type { Metadata, Viewport } from 'next';
import { siteUrl } from '../lib/site';
import './globals.css';
import './variations.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'אילה דקל — סופרת, מרצה ואשת רוח | ספרים ומפגשים',
  description: 'הכירו את עולמה של אילה דקל: הספרים לוחמות, עד שתחזור אליי, רסיסי לילה, חבורה לא סודית והביתה הלוך חזור. ספרות, זהות, נשים ותרבות יהודית ישראלית.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: { type: 'website', locale: 'he_IL', siteName: 'אילה דקל', title: 'אילה דקל — סיפורים שנשארים איתנו', description: 'ספרים, מפגשים ומחשבות על נשים, זהות והחיים שבין המילים.', url: '/' },
  twitter: { card: 'summary', title: 'אילה דקל — סופרת ואשת רוח', description: 'הספרים, הסיפורים והמפגשים של אילה דקל.' },
};
export const viewport: Viewport = { themeColor: '#783b45', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="he" dir="rtl"><body id="top">{children}</body></html>;
}
