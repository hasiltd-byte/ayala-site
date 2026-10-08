# אתר אילה דקל ב־Next.js

האתר הומר ל־Next.js 16.4.0, React 19.3.0, TypeScript ו־App Router כמו ברפרנס. קוד האתר הפעיל נמצא ב־`app/`, הרכיבים האינטראקטיביים ב־`components/` והתמונות ב־`public/assets/`.

בתיקיית `ayala-site` הריצו:

```sh
npm install
npm run dev
```

פתחו http://localhost:3000. ב־PowerShell עם חסימת סקריפטים השתמשו ב־`npm.cmd`.

לגרסת ייצור: `npm run build` ואז `npm run start`. לבדיקת TypeScript: `npm run typecheck`.

`app/layout.tsx` מגדיר Metadata, עברית ו־RTL. `app/robots.ts` ו־`app/sitemap.ts` יוצרים את קובצי SEO. `lib/site.ts` מגדיר כתובת ונתוני Person, WebSite ו־Book. הגדירו `NEXT_PUBLIC_SITE_URL` ב־`.env.local` לדומיין הסופי לפני build, לפי `.env.example`.

`dist/`, `server.cjs` והדוחות ב־`.qa/` נשמרו מהגרסה הסטטית הקודמת. הפעלה באמצעות Next.js אינה משתמשת בהם. ציוני Lighthouse הקודמים אינם מדידה של גרסת Next.js. פריסת Next.js דורשת אחסון תומך Next.js, כגון Vercel או שרת Node; הגדרת Sites הקודמת מפנה עדיין לגרסה הסטטית.
