export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ayala-dekel-stories.fairysiren1.chatgpt.site').replace(/\/$/, '');
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "SITE_ORIGIN/#website",
      "url": "SITE_ORIGIN/",
      "name": "אילה דקל — ספרים ומפגשים",
      "inLanguage": "he",
      "about": {
        "@id": "SITE_ORIGIN/#author"
      }
    },
    {
      "@type": "Person",
      "@id": "SITE_ORIGIN/#author",
      "name": "אילה דקל",
      "alternateName": "Ayala Dekel",
      "jobTitle": "סופרת, מרצה ואשת רוח",
      "sameAs": [
        "https://he.wikipedia.org/wiki/אילה_דקל",
        "https://heb.hartman.org.il/person/ayala-dekel/",
        "https://www.e-vrit.co.il/Author/13421/"
      ],
      "image": "SITE_ORIGIN/assets/ayala.webp"
    },
    {
      "@type": "ItemList",
      "name": "ספרי אילה דקל",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Book",
            "name": "לוחמות",
            "datePublished": "2026",
            "inLanguage": "he",
            "author": {
              "@id": "SITE_ORIGIN/#author"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Book",
            "name": "עד שתחזור אליי",
            "datePublished": "2025",
            "inLanguage": "he",
            "author": {
              "@id": "SITE_ORIGIN/#author"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Book",
            "name": "רסיסי לילה",
            "datePublished": "2024",
            "inLanguage": "he",
            "author": {
              "@id": "SITE_ORIGIN/#author"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Book",
            "name": "חבורה לא סודית",
            "datePublished": "2022",
            "inLanguage": "he",
            "author": [
              {
                "@id": "SITE_ORIGIN/#author"
              },
              {
                "@type": "Person",
                "name": "שירלי צפת דוידאי"
              }
            ]
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Book",
            "name": "הביתה הלוך חזור",
            "datePublished": "2021",
            "inLanguage": "he",
            "author": {
              "@id": "SITE_ORIGIN/#author"
            }
          }
        }
      ]
    }
  ]
};
export function getStructuredData(){return JSON.parse(JSON.stringify(structuredData).replaceAll('SITE_ORIGIN',siteUrl))}
