import useSWR from "swr";
import { useRouter } from "next/router";
import OddsTable from "@/components/OddsTable";
const fetcher = (url) => fetch(url).then(r => r.json());
export default function RaceDetail(){
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(() => id ? `/api/racecards/${id}` : null, fetcher);
  const race = data?.race;
  const entries = data?.entries ?? [];
  if(!race) return <div className="max-w-7xl mx-auto px-4 py-10"><p>Loading…</p></div>
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-bold">{race.venue} — {race.time}</h1>
        <span className="badge">{race.distance} • {race.runners} runners</span>
      </div>
      <OddsTable entries={entries} />
    </div>
  )
}
