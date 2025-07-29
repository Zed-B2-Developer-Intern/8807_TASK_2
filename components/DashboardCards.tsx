export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { title: "Users", value: 1280 },
        { title: "Sessions", value: 987 },
        { title: "Revenue", value: "$3,420" },
        { title: "Growth", value: "12%" },
      ].map((card, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">{card.title}</h2>
          <p className="text-xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
