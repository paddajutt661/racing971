import Link from "next/link";
export default function RaceList({ races = [] }){
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Today&apos;s Racecards</h3>
        <span className="text-xs text-white/60">{races.length} races</span>
      </div>
      <ul className="divide-y divide-white/10">
        {races.map(r => (
          <li key={r.id} className="py-3 flex items-center justify-between">
            <div>
              <p className="font-medium">{r.time} — {r.venue}</p>
              <p className="text-xs text-white/60">{r.distance} • {r.runners} runners</p>
            </div>
            <Link href={`/racecards/${r.id}`} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm">View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
