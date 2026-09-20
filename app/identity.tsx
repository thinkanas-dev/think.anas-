"use client";
import { useEffect, useRef } from 'react';

export function TMark({ className = '' }: { className?: string }) {
 return <svg className={'emblem t-mark ' + className} viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M43 12h17v18H43zM15 35h68L69 51H59v19c0 9 5 13 14 13h8L67 97h-5c-14 0-22-9-22-24V51H15z"/><path className="t-terminal" fill="currentColor" d="m76 12 12 12-12 12-12-12z"/></svg>;
}

// One split seed, seven configurations: the identity grows from a shared module.
export function Emblem({ variant = 0, className = '' }: { variant?: number; className?: string }) {
 return <svg className={'emblem ' + className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><g className="emblem-petals">{Array.from({ length: variant === 0 ? 3 : variant + 2 }, (_, i) => <path key={i} transform={`rotate(${i * 360 / (variant === 0 ? 3 : variant + 2)} 50 50)`} d="M50 40C29 36 20 17 32 10C45 3 57 24 50 40ZM47 31C40 25 37 19 38 16" stroke="currentColor" strokeWidth={variant === 0 ? 5 : 2.8} strokeLinejoin="round"/>)}</g><circle className="flower-core" cx="50" cy="50" r="4" fill="currentColor"/></svg>;
}

export function LivingSculpture() {
 const host = useRef<HTMLDivElement>(null);
 useEffect(() => { let frame = 0; const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { if (host.current) host.current.style.setProperty('--unfold', String(Math.min(window.scrollY / 850, 1))); }); }; update(); window.addEventListener('scroll', update, { passive: true }); return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); }; }, []);
 return <div className="living-sculpture" ref={host}><div className="sculpture-grid"/><svg viewBox="0 0 600 600" role="img" aria-label="Abstract sculpture of flowing cellular contours"><defs><linearGradient id="membrane" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e2ff54"/><stop offset=".45" stopColor="#9cafff"/><stop offset="1" stopColor="#536bf0"/></linearGradient></defs><g className="membrane">{Array.from({length: 23}, (_, i) => <path key={i} transform={`translate(300 290) rotate(${i * 6}) scale(${1-i*.026}) translate(-300 -290)`} d="M300 65C435 30 540 142 504 258C471 359 526 479 401 513C280 546 216 445 126 404C16 353 50 225 140 202C221 181 186 95 300 65Z" fill="none" stroke="url(#membrane)" strokeWidth={i % 4 === 0 ? 2 : .8} opacity={1-i*.023}/>)}</g></svg></div>;
}
