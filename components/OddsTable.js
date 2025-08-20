export default function OddsTable({ entries = [] }){
  return (
    <div className="card p-4 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="text-white/70">
          <tr className="text-left">
            <th className="py-2 pr-4">#</th>
            <th className="py-2 pr-4">Horse</th>
            <th className="py-2 pr-4">Jockey</th>
            <th className="py-2 pr-4">Trainer</th>
            <th className="py-2 pr-4">Win</th>
            <th className="py-2 pr-4">Place</th>
            <th className="py-2 pr-4">Stars</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="py-2 pr-4">{e.no}</td>
              <td className="py-2 pr-4">{e.horse}</td>
              <td className="py-2 pr-4">{e.jockey}</td>
              <td className="py-2 pr-4">{e.trainer}</td>
              <td className="py-2 pr-4">{e.win}</td>
              <td className="py-2 pr-4">{e.place}</td>
              <td className="py-2 pr-4">{"★".repeat(e.stars)}{"☆".repeat(5-e.stars)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
