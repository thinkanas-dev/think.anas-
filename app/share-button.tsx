"use client";
import { useState } from 'react';
export function ShareButton() {
 const [state,setState]=useState('');
 async function copy(){try{await navigator.clipboard.writeText(window.location.href.split('#')[0]);setState('Link copied');}catch{setState('Copy the URL from your browser to share this article.');}}
 return <div className="share-control"><button onClick={copy}>Copy article link</button><span role="status">{state}</span></div>;
}
