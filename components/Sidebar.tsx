export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 font-bold text-lg">Dashboard</div>
      <nav className="px-6 space-y-2">
        <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
        <a href="#" className="block text-gray-700 hover:text-blue-500">Reports</a>
        <a href="#" className="block text-gray-700 hover:text-blue-500">Analytics</a>
        <a href="#" className="block text-gray-700 hover:text-blue-500">Settings</a>
      </nav>
    </aside>
  );
}
