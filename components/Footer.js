export default function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-white/80">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.svg" alt="Racing971" className="w-6 h-6" />
            <span className="font-semibold">RACING971</span>
          </div>
          <p>Your home for Abu Dhabi racing news, racecards, odds and results.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Quick links</p>
          <ul className="space-y-1">
            <li><a className="link" href="/racecards">Today&apos;s Cards</a></li>
            <li><a className="link" href="/results">Latest Results</a></li>
            <li><a className="link" href="/news">Tips & Blogs</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Responsible Play</p>
          <p>21+ Only. Please play responsibly. Need help? Contact your local helpline.</p>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 pb-6">© {new Date().getFullYear()} Racing971</div>
    </footer>
  );
}
