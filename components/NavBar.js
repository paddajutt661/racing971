import Link from "next/link";

export default function NavBar(){
  return (
    <header className="sticky top-0 z-50 bg-play-ink/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Racing971" className="w-9 h-9" />
          <span className="font-semibold tracking-wide">RACING971</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link className="hover:text-play-gold" href="/racecards">Racecards</Link>
          <Link className="hover:text-play-gold" href="/results">Results</Link>
          <Link className="hover:text-play-gold" href="/news">News</Link>
          <Link className="hover:text-play-gold" href="/promotions">Promotions</Link>
          <a className="ml-2 px-4 py-2 rounded-full bg-play-purple hover:opacity-90" href="#">Sign Up</a>
        </nav>
      </div>
    </header>
  );
}
