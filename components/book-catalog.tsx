"use client";
import {useState,type MouseEvent} from "react";
import {variations,type Variation} from "../lib/variations";
export default function BookCatalog({variant = "classic"}: {variant?: Variation}){const copy=variations[variant];const [filter,setFilter]=useState('all');const count=filter==='all'?5:filter==='fiction'?3:1;function handleFilter(event:MouseEvent<HTMLDivElement>){const target=(event.target as HTMLElement).closest<HTMLButtonElement>('button[data-filter]');if(target?.dataset.filter)setFilter(target.dataset.filter)}return (<section className="wrap section" id="books" aria-labelledby="books-title">
<div className="section-head">
<div>
<div className="eyebrow">על המדף</div>
<h2 id="books-title">{copy.booksTitle}</h2>
</div>
<p>{copy.booksIntro}</p>
</div>
<div onClick={handleFilter} className="filters" aria-label="סינון ספרים לפי סוג">
<button data-filter="all" aria-pressed={filter === "all"} >כל הספרים</button>
<button data-filter="fiction" aria-pressed={filter === "fiction"} >פרוזה</button>
<button data-filter="testimony" aria-pressed={filter === "testimony"} >סיפורים מהחיים</button>
<button data-filter="children" aria-pressed={filter === "children"} >לילדים ולנוער</button>
</div>
<span className="sr-only" role="status" id="filter-status">{`מוצגים ${count} ספרים`}</span>
<div className="books-grid">
<article className="book-card" data-category="testimony" hidden={filter !== "all" && filter !== "testimony"}>
<div className="book-image">
<img src="/assets/book-0.webp" alt="עטיפת הספר לוחמות" width="360" height="540" loading="lazy" decoding="async" />
</div>
<div className="meta">2026 · התחנה · עדויות</div>
<h3>לוחמות</h3>
<p>{variant === "classic" ? "עשרים קולות של נשים שלקחו חלק בלחימה. אומץ, אחריות והסיפורים שצריכים להישמע." : "עשרים נשים, עשרים סיפורים של אומץ. הזמנה להקשיב מקרוב לקולות של מי שהיו שם."}</p>
<details>
<summary>עוד על הספר</summary>
<p>מונולוגים של לוחמות בצה״ל במלחמת חרבות ברזל, המעניקים מקום לחוויותיהן האישיות.</p>
<a href="https://www.e-vrit.co.il/Product/38185/" target="_blank" rel="noopener noreferrer">לוחמות בחנות עברית</a>
</details>
</article>
<article className="book-card" data-category="fiction" hidden={filter !== "all" && filter !== "fiction"}>
<div className="book-image">
<img src="/assets/book-1.webp" alt="עטיפת הספר עד שתחזור אליי" width="360" height="540" loading="lazy" decoding="async" />
</div>
<div className="meta">2025 · התחנה · פרוזה</div>
<h3>עד שתחזור אליי</h3>
<p>{variant === "classic" ? "אהבה, משפחה וגעגוע בצל המילואים. סיפור על מי שיוצאים, ועל מי שנשארים בבית." : "כשהלב מחכה בדלת. סיפור על אהבה ועל הניסיון להחזיק בית כשהמלחמה רחוקה — וקרובה כל כך."}</p>
<details>
<summary>עוד על הספר</summary>
<p>יצירה על זוג המנסה לשמור על חיי המשפחה בתקופת המלחמה, המבוססת על אירועים מחייה של אילה.</p>
<a href="https://www.e-vrit.co.il/Product/35862/" target="_blank" rel="noopener noreferrer">עד שתחזור אליי בחנות עברית</a>
</details>
</article>
<article className="book-card" data-category="fiction" hidden={filter !== "all" && filter !== "fiction"}>
<div className="book-image">
<img src="/assets/book-2.webp" alt="עטיפת הספר רסיסי לילה" width="360" height="540" loading="lazy" decoding="async" />
</div>
<div className="meta">2024 · שתיים · רומן</div>
<h3>רסיסי לילה</h3>
<p>{variant === "classic" ? "יומנה של חיותה בוסל פוגש אישה צעירה בת זמננו. שתי תקופות, ושאלות על זהות נשית." : "שתי נשים, מאה שנים ביניהן, ושאלות שממשיכות להדהד. לפעמים קול מהעבר מאיר את הדרך שלנו."}</p>
<details>
<summary>עוד על הספר</summary>
<p>רומן השוזר את סיפורה ההיסטורי של החלוצה חיותה בוסל עם דמות בדיונית במאה ה־21.</p>
<a href="https://www.e-vrit.co.il/Product/31732/" target="_blank" rel="noopener noreferrer">רסיסי לילה בחנות עברית</a>
</details>
</article>
<article className="book-card" data-category="children" hidden={filter !== "all" && filter !== "children"}>
<div className="book-image">
<img src="/assets/book-3.webp" alt="עטיפת הספר חבורה לא סודית" width="360" height="540" loading="lazy" decoding="async" />
</div>
<div className="meta">2022 · ידיעות ספרים · ילדים ונוער</div>
<h3>חבורה לא סודית</h3>
<p>{variant === "classic" ? "הרפתקה עכשווית שפוגשת אגדות תלמודיות. עם שירלי צפת דוידאי." : "חברות, סקרנות והרפתקה: סיפורים עתיקים מקבלים חיים חדשים בעולמם של ילדים. עם שירלי צפת דוידאי."}</p>
<details>
<summary>עוד על הספר</summary>
<p>העולם התלמודי ועולמם של ילדים היום נפגשים בספר הרפתקאות על חברות ומציאת מקום בחבורה.</p>
<a href="https://www.e-vrit.co.il/Product/26307/" target="_blank" rel="noopener noreferrer">חבורה לא סודית בחנות עברית</a>
</details>
</article>
<article className="book-card" data-category="fiction" hidden={filter !== "all" && filter !== "fiction"}>
<div className="book-image">
<img src="/assets/book-4.webp" alt="עטיפת הספר הביתה הלוך חזור" width="360" height="540" loading="lazy" decoding="async" />
</div>
<div className="meta">2021 · שתיים · רומן</div>
<h3>הביתה הלוך חזור</h3>
<p>{variant === "classic" ? "מסע בעקבות סוד משפחתי, הקהילה היהודית במצרים והדרך הארוכה למצוא בית." : "סוד משפחתי פותח דלת לעולם אחר. מסע בין מצרים לישראל, בין מה שסיפרו לנו למה שעוד נותר לגלות."}</p>
<details>
<summary>עוד על הספר</summary>
<p>ספר הביכורים של אילה עוסק במפגש בין זהות דתית וחילונית ובסיפורן של נשים בקהילה היהודית במצרים.</p>
<a href="https://www.e-vrit.co.il/Product/23188/" target="_blank" rel="noopener noreferrer">הביתה הלוך חזור בחנות עברית</a>
</details>
</article>
</div>
</section>);}
