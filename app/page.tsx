import { preload } from 'react-dom';
import Header from '../components/header';
import BookCatalog from '../components/book-catalog';
import {getStructuredData} from '../lib/site';
export default function Page(){preload('/assets/ayala.webp', {as: 'image', fetchPriority: 'high'});return (<>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(getStructuredData()).replace(/</g,'\\u003c')}} />
<a className="skip" href="#main">דילוג לתוכן הראשי</a>
<Header />
<main id="main">
<section className="hero wrap" aria-labelledby="hero-title">
<div className="hero-copy">
<div className="eyebrow">מילים. אנשים. ומה שביניהם.</div>
<h1 id="hero-title">יש סיפורים<br />שנשארים<br />
<em>איתנו.</em>
</h1>
<p>על נשים שמוצאות את קולן, על בית ושייכות, ועל החיים שבין מה שקיבלנו בירושה למה שאנחנו בוחרים להיות.</p>
<div className="hero-actions">
<a className="button" href="#books">לגלות את הספרים</a>
<a className="button outline" href="#about">נעים להכיר</a>
</div>
<div className="hero-note">אילה דקל &nbsp; / &nbsp; ספרות ישראלית, עם מקום לכל קול</div>
</div>
<div className="hero-art">
<div className="portrait-border" aria-hidden="true">
</div>
<img className="portrait" src="/assets/ayala.webp" alt="אילה דקל, סופרת ואשת רוח" width="570" height="580" fetchPriority="high" />
<span className="vertical-label" aria-hidden="true">AYALA DEKEL · AUTHOR</span>
<div className="photo-note">
<span>כל סיפור הוא מפגש.</span>
<small>בין עולמות, בין דורות, בין אנשים.</small>
</div>
</div>
</section>
<div className="ribbon">
<div className="wrap ribbon-inner">
<span>ספרות שמחברת</span>
<i aria-hidden="true">✳</i>
<span>נשים במרכז הסיפור</span>
<i aria-hidden="true">✳</i>
<span>זהות ושייכות</span>
<i aria-hidden="true">✳</i>
<span>מבט חדש על המוכר</span>
</div>
</div>
<BookCatalog />
<section className="about section" id="about" aria-labelledby="about-title">
<div className="wrap about-grid">
<div>
<div className="eyebrow">האישה שמאחורי המילים</div>
<h2 id="about-title">נעים להכיר,<br />אילה.</h2>
<div className="about-aside">
<strong>בין בית המדרש<br />לשולחן הכתיבה.</strong>
<p>סופרת, מרצה ואשת רוח ישראלית.</p>
</div>
</div>
<div className="about-copy">
<p className="lead">הכתיבה של אילה דקל מפגישה בין סיפורים אישיים לשאלות הגדולות של החברה הישראלית.</p>
<p>אילה גדלה בבית חורון במשפחה דתית, למדה יהדות ושירתה כמפקדת וקצינה בחוות השומר. הדרך שלה הובילה לשליחות חינוכית בטורונטו, להוראת תנ״ך בבית הסוהר איילון ולמפגש מתמשך עם אנשים, טקסטים ועולמות שונים.</p>
<p>בשנת 2013 הצטרפה לישיבה החילונית של בינ״ה, ובהמשך עמדה בראשה עד תחילת 2026. היא מרצה ומנחה בנושאי תרבות יהודית ישראלית, תלמוד, מגדר ודמויות נשיות, ובוגרת בית המדרש לרבנות ישראלית של מכון הרטמן והמדרשה באורנים.</p>
<p>מאז ספרה הראשון ב־2021, היא כותבת על בית, משפחה, זהות וקולות נשיים. אילה מתגוררת במודיעין עם בן זוגה ושלושת ילדיהם.</p>
<div className="tags">
<span>ספרות ישראלית</span>
<span>תרבות יהודית</span>
<span>נשים ומגדר</span>
<span>זהות ושייכות</span>
</div>
</div>
</div>
</section>
<section className="wrap section" id="meetings" aria-labelledby="meetings-title">
<div className="section-head">
<div>
<div className="eyebrow">מהספר אל השיחה</div>
<h2 id="meetings-title">נפגשים.<br />פותחים עוד עולם.</h2>
</div>
<p>הסיפורים ממשיכים גם מחוץ לדף — בשיחה, בלימוד ובמבט משותף על העולם שבו אנחנו חיים.</p>
</div>
<div className="meeting-grid">
<article className="meeting-card">
<span className="number">01</span>
<h3>ספרים, חיים ומה שביניהם</h3>
<p>שיחה על העולמות שבספרים: בית ומשפחה, עבר והווה, והמפגש בין החיים האישיים לסיפור הישראלי.</p>
<a href="#contact">לבירור מפגש ספרותי</a>
</article>
<article className="meeting-card">
<span className="number">02</span>
<h3>נשים שמשמיעות קול</h3>
<p>דמויות נשיות, שאלות של מגדר והסיפורים שנשארו בשולי ההיסטוריה — מהתלמוד ועד ימינו.</p>
<a href="#contact">לבירור הרצאה</a>
</article>
<article className="meeting-card">
<span className="number">03</span>
<h3>זהות. תרבות. מפגש.</h3>
<p>לימוד ושיחה על תרבות יהודית ישראלית, המפגש בין דתיים לחילוניים והחיבורים שבין אנשים לטקסטים.</p>
<a href="#contact">לבירור מפגש לימוד</a>
</article>
</div>
</section>
<section className="editorial section" id="words" aria-labelledby="words-title">
<div className="wrap">
<div className="section-head">
<div>
<div className="eyebrow">בין המילים</div>
<h2 id="words-title">מחשבות שממשיכות<br />מעבר לספר.</h2>
</div>
<p>מאמרים, שיחות וסיפורים — עוד דרכים לפגוש את עולמה של אילה.</p>
</div>
<div className="articles">
<article className="article">
<small>הספרנים · הספרייה הלאומית</small>
<h3>סיפורים מתוך ההיסטוריה</h3>
<p>נשים, תרבות וספרות במאמרים של אילה בבלוג הספרייה הלאומית.</p>
<a className="text-link" href="https://blog.nli.org.il/author/ayalad/" target="_blank" rel="noopener noreferrer">למאמרים בספרייה הלאומית</a>
</article>
<article className="article">
<small>מכון הרטמן</small>
<h3>מבט על המציאות הישראלית</h3>
<p>כתבות, שיחות ותכנים המחברים בין מחשבה יהודית לחיים כאן ועכשיו.</p>
<a className="text-link" href="https://heb.hartman.org.il/person/ayala-dekel/" target="_blank" rel="noopener noreferrer">לתכנים במכון הרטמן</a>
</article>
<article className="article">
<small>בינ״ה · הבית של היהדות הישראלית</small>
<h3>לקרוא את המוכר מחדש</h3>
<p>טקסטים על תרבות, משפחה ויהדות ישראלית מתוך הכתיבה של אילה בבינ״ה.</p>
<a className="text-link" href="https://www.bina.org.il/writer/אילה-דקל/" target="_blank" rel="noopener noreferrer">למאמרים בבינ״ה</a>
</article>
</div>
</div>
</section>
<section className="wrap section faq-grid" aria-labelledby="faq-title">
<div>
<div className="eyebrow">עוד רגע לפני</div>
<h2 id="faq-title">שאלות של<br />קוראים וקוראות.</h2>
</div>
<div className="faq-list">
<details>
<summary>איפה אפשר למצוא את הספרים?</summary>
<p>לכל ספר בקטלוג יש קישור לעמוד שלו בחנות עברית, שם אפשר לבדוק פורמטים, זמינות ואפשרויות רכישה. הרכישה מתבצעת בחנות החיצונית.</p>
</details>
<details>
<summary>איזה ספר מתאים לקוראים צעירים?</summary>
<p>״חבורה לא סודית״, שנכתב עם שירלי צפת דוידאי, הוא ספר הרפתקאות לילדים ולנוער המשלב סיפורים תלמודיים עם העולם העכשווי.</p>
</details>
<details>
<summary>איך מבררים על מפגש או הרצאה?</summary>
<p>אפשר לפנות דרך עמוד הפייסבוק של אילה, המקושר באזור יצירת הקשר, ולברר על התאמה לקהל, תוכן המפגש וזמינות.</p>
</details>
<details>
<summary>איפה אפשר לקרוא עוד מאילה?</summary>
<p>באזור ״בין המילים״ תמצאו קישורים למאמרים ותכנים בספרייה הלאומית, במכון הרטמן ובבינ״ה.</p>
</details>
</div>
</section>
<section className="contact" id="contact" aria-labelledby="contact-title">
<div className="wrap contact-inner">
<div>
<div className="eyebrow">כל מפגש מתחיל במילה</div>
<h2 id="contact-title">נמשיך את השיחה?</h2>
<p>לבירור על מפגש, לשאלה על הספרים או פשוט כדי להישאר קרובים למילים — אפשר לפנות לאילה בפייסבוק.</p>
</div>
<a className="button" href="https://www.facebook.com/ayaladeckel" target="_blank" rel="noopener noreferrer">לעמוד של אילה בפייסבוק</a>
</div>
</section>
</main>
<footer className="wrap footer">
<div className="footer-top">
<a className="brand" href="#top">
<span className="brand-name">אילה דקל<small>סיפורים. אנשים. ומה שביניהם.</small>
</span>
</a>
<nav className="footer-links" aria-label="קישורים בתחתית האתר">
<a href="#books">הספרים</a>
<a href="#about">אודות</a>
<a href="#meetings">מפגשים</a>
<a href="#contact">יצירת קשר</a>
</nav>
</div>
<div className="footer-bottom">
<span>© 2026 · אילה דקל</span>
<span>תוכן ביוגרפי על בסיס <a href="https://he.wikipedia.org/wiki/אילה_דקל" target="_blank" rel="noopener noreferrer">ויקיפדיה</a> · צילום: אתר מכון הרטמן · עטיפות: עברית</span>
</div>
<details className="legal">
<summary>פרטיות ונגישות</summary>
<p>האתר אינו כולל טפסים, עוגיות מעקב או שירותי ניתוח שימוש. קישורים לחנויות ולרשתות חברתיות מובילים לאתרים חיצוניים עם מדיניות פרטיות נפרדת. האתר תומך בניווט מקלדת, דילוג לתוכן, הגדלת טקסט והעדפת תנועה מופחתת. לדיווח על קושי בשימוש אפשר לפנות באמצעות הקישור ליצירת קשר.</p>
</details>
</footer>
</>);}
