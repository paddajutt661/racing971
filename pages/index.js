import useSWR from "swr";
import Hero from "@/components/Hero";
import RaceList from "@/components/RaceList";
import PromoStrip from "@/components/PromoStrip";

const fetcher = (url) => fetch(url).then(r => r.json());

export default function Home(){
  const { data: races = [] } = useSWR("/api/racecards", fetcher);

  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid gap-6">
          <RaceList races={races} />
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Latest News</h3>
            <p className="text-white/80 text-sm">Worcester is our domestic focus with a competitive evening card alongside Grade 1 action from Saratoga. Plus previews for the Ebor Festival at York.</p>
          </div>
        </div>
        <aside className="grid gap-6">
          <div className="card p-4">
            <h4 className="font-semibold mb-3">Live Now</h4>
            <div className="aspect-video rounded-lg bg-black/60 border border-white/10 flex items-center justify-center">Live Stream Placeholder</div>
            <p className="text-xs text-white/60 mt-2">Connect to your broadcast provider to enable live video.</p>
          </div>
          <div className="card p-4">
            <h4 className="font-semibold mb-2">Current Offers</h4>
            <ul className="list-disc list-inside text-sm text-white/80">
              <li>Refer a Friend – Get a Free Bet</li>
              <li>Early Payout on Lead at 2F</li>
            </ul>
          </div>
        </aside>
      </section>
      <PromoStrip />
    </>
  )
}
