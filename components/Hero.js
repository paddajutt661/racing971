export default function Hero(){
  return (
    <section className="brand-gradient">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">ADTC RACE DAY</h1>
          <p className="mt-4 text-white/90">Live odds, instant updates and the best coverage of Abu Dhabi Turf Club. Refer a friend – get a free bet.</p>
          <div className="mt-6 flex gap-3">
            <a href="/racecards" className="px-5 py-3 rounded-full bg-play-gold text-black font-semibold">Today&apos;s Cards</a>
            <a href="/news" className="px-5 py-3 rounded-full border border-white/30 hover:bg-white/10">News & Tips</a>
          </div>
          <div className="mt-4"><span className="badge">21+ Play Responsibly</span></div>
        </div>
        <div className="card p-4">
          <img src="/hero.jpg" alt="Race" className="rounded-xl w-full h-[280px] object-cover" />
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            <div className="card p-3">Home Feed</div>
            <div className="card p-3">Away Feed</div>
            <div className="card p-3">Promotions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
