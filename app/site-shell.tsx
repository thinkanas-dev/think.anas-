"use client";
import { useState } from 'react';
import { TMark } from './identity';

export function Direction({ className = '' }: { className?: string }) {
 return <svg className={'direction ' + className} viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 25 25 5M12 5h13v13" stroke="currentColor" strokeWidth="1.8"/><circle cx="7" cy="7" r="2" fill="currentColor"/></svg>;
}
export function Wordmark() { return <span className="wordmark"><TMark/><span>think<span className="wordmark-dot">.</span>anas</span></span>; }
export function SiteHeader() {
 const [open,setOpen]=useState(false);
 return <><a className="skip" href="#main">Skip to content</a><header className="site-header"><a href="/" aria-label="think.anas home"><Wordmark/></a><nav id="site-navigation" aria-label="Main navigation" className={open ? 'is-open' : ''}><a href="/#applications" onClick={()=>setOpen(false)}>AI Applications</a><a href="/#workflows" onClick={()=>setOpen(false)}>Interactive Workflows</a><a href="/#about" onClick={()=>setOpen(false)}>About Anas</a></nav><a className="header-contact" href="/#contact">Contact <Direction/></a><button className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={()=>setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></header></>;
}
export function SiteFooter() {
 return <footer className="site-footer"><div><a href="/" aria-label="think.anas home"><Wordmark/></a><p>Understand the technology.<br/>Keep the human in view.</p></div><nav aria-label="Footer navigation"><a href="/#applications">Applications</a><a href="/methodology">Editorial method</a><a href="https://www.instagram.com/think.anas/" target="_blank" rel="noreferrer">Instagram <Direction/></a></nav><div className="footer-fine"><span>© {new Date().getFullYear()} think.anas</span><span>Independent educational content. Not clinical advice.</span></div></footer>;
}
