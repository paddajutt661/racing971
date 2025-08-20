export default function News(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-4">
      <h1 className="text-3xl font-bold">News & Tips</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <article key={i} className="card p-5">
            <p className="text-xs text-white/50">Today</p>
            <h3 className="mt-1 font-semibold">Wednesday&apos;s Action on Sky Sports Racing</h3>
            <p className="text-sm text-white/80 mt-2">Domestic focus with a competitive evening card; Grade 1 action from Saratoga. Previews for the Ebor Festival at York.</p>
            <a className="mt-3 inline-block link text-sm" href="#">Read more</a>
          </article>
        ))}
      </div>
    </div>
  )
}
