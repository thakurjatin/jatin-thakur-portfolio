import Link from 'next/link';
export default function NotFound() {
  return <main className="not-found"><span>404 / PAGE NOT FOUND</span><h1>This route went off the map.</h1><p>The page may have moved, or the link may be incorrect.</p><Link href="/">Return to portfolio →</Link></main>;
}
