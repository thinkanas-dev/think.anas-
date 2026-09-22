import { SiteHeader, SiteFooter } from '../../site-shell';
export default function NotFound(){return <><SiteHeader/><main id="main" className="missing-page"><p className="eyebrow">Application not found</p><h1>This analysis is not available.</h1><a className="primary-action" href="/#applications">Explore all applications</a></main><SiteFooter/></>;}
