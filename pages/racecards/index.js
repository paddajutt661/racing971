import useSWR from "swr";
import RaceList from "@/components/RaceList";
const fetcher = (url) => fetch(url).then(r => r.json());
export default function Racecards(){
  const { data: races = [] } = useSWR("/api/racecards", fetcher);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Racecards</h1>
      <RaceList races={races} />
    </div>
  )
}
