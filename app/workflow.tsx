"use client";
import { useId, useState } from 'react';
import { dossiers, type Dossier } from './dossiers';
import { Emblem } from './identity';
import { Direction } from './site-shell';

export function Workflow({ dossier, compact = false }: { dossier: Dossier; compact?: boolean }) {
 const [step,setStep]=useState(0);const id=useId();const current=dossier.steps[step];
 function move(index:number) {const next=(index+dossier.steps.length)%dossier.steps.length;setStep(next);document.getElementById(`${id}-tab-${next}`)?.focus();}
 return <div className={'workflow ' + (compact ? 'workflow-compact' : '')}>
  <div className="workflow-caption"><span>Interactive workflow</span><span>Illustrative · no patient data</span></div>
  <div className="workflow-steps" role="tablist" aria-label={`${dossier.title} workflow stages`}>{dossier.steps.map((s,i)=><button key={s.title} id={`${id}-tab-${i}`} role="tab" aria-selected={step===i} aria-controls={`${id}-panel`} tabIndex={step===i?0:-1} className={step===i?'selected':''} onClick={()=>setStep(i)} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(step+1);}if(e.key==='ArrowLeft'){e.preventDefault();move(step-1);}if(e.key==='Home'){e.preventDefault();move(0);}if(e.key==='End'){e.preventDefault();move(dossier.steps.length-1);}}}><span className="step-node" aria-hidden="true"/>{s.title}</button>)}</div>
  <div className="workflow-detail" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${step}`} tabIndex={0}>
   <div className="workflow-visual" aria-hidden="true"><div className="workflow-orbit"><Emblem variant={dossier.emblem}/></div><span className="workflow-stage">{current.title}</span></div>
   <div className="workflow-explanation"><dl className="io-pair"><div><dt>Input</dt><dd>{current.input}</dd></div><div><dt>Output</dt><dd>{current.output}</dd></div></dl><h3>{current.title}</h3><p>{current.process}</p><div className="human-check"><span>Human checkpoint</span><p>{current.checkpoint}</p></div></div>
  </div>
 </div>;
}
export function WorkflowExplorer() {
 const [selected,setSelected]=useState('clinical-nlp-llms');const dossier=dossiers.find(d=>d.slug===selected)!;
 return <div className="workflow-explorer"><div className="workflow-select"><label htmlFor="workflow-domain">Choose an application</label><select id="workflow-domain" value={selected} onChange={e=>setSelected(e.target.value)}>{dossiers.map(d=><option key={d.slug} value={d.slug}>{d.title}</option>)}</select><a href={'/applications/'+dossier.slug}>Read the full analysis <Direction/></a></div><Workflow key={selected} dossier={dossier}/></div>;
}
