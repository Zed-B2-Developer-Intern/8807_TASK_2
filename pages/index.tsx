import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardCards from "@/components/DashboardCards";
import Chart from "@/components/Chart";
import DataTable from "@/components/DataTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="p-6 space-y-6 overflow-auto">
            <DashboardCards />
            <Chart />
            <DataTable />
          </main>
        </div>
      </div>
    </>
  );
}
