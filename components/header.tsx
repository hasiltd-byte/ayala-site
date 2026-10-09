"use client";
import {useState,useEffect} from "react";
export default function Header({variant = "classic"}: {variant?: "classic" | "warm" | "blue"}){const [open,setOpen]=useState(false);useEffect(()=>{const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[]);return (<header className="header">
<div className="wrap topbar">
<a className="brand" href="#top" aria-label="אילה דקל — עמוד הבית">
<svg className="brand-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M5 9c7-2 11-1 15 3 4-4 8-5 15-3v24c-7-2-11-1-15 3-4-4-8-5-15-3V9Z" stroke="currentColor" strokeWidth="1.5"/>
<path d="M20 12v24M10 15l6 1m-6 6 6 1m8-7 6-1m-6 8 6-1" stroke="currentColor"/>
</svg>
<span className="brand-name">אילה דקל<small>סופרת · מרצה · אשת רוח</small>
</span>
</a>
<nav onClick={() => setOpen(false)} className={`nav ${open ? "open" : ""}`} id="navigation" aria-label="ניווט ראשי">
<a href="#books">הספרים</a>
<a href="#about">נעים להכיר</a>
<a href="#meetings">מפגשים והרצאות</a>
<a href="#words">בין המילים</a>
</nav>
<a className="button header-cta" href="#contact">{variant === "classic" ? "נהיה בקשר" : "בואו נדבר"}</a>
<button className="menu-toggle" aria-label="פתיחה וסגירה של התפריט" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
</div>
</header>);}
